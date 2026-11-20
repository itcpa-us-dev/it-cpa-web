// scripts/prerender.mjs
//
// Runs after `vite build` (wired up as "postbuild" in package.json).
// Opens each route of the built site in headless Chrome, waits for React to
// render, and saves the finished HTML into dist/. Search engines and AI
// crawlers that don't run JavaScript then get the real page text instead of
// an empty <div id="root">. Visitors see no difference: the app still loads
// and takes over the page as before (see the data-prerendered note below).
//
// It also gives /privacy-policy and /terms-of-service real files, so GitHub
// Pages answers them with HTTP 200 instead of 404.
//
// Usage: node scripts/prerender.mjs [distDir]      (default: dist)
// Needs: npm i -D puppeteer

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const DIST = path.resolve(process.argv[2] || 'dist');
const SITE = 'https://itcpa-us.com';
const FIRM = 'IT CPA & Advisory, PLLC';

// One entry per page. Add new pages here (and to public/sitemap.xml).
const ROUTES = [
	{
		path: '/',
		file: 'index.html',
		// Title and description for the homepage come from index.html itself.
	},
	{
		path: '/privacy-policy',
		file: 'privacy-policy.html',
		title: `Privacy Policy | ${FIRM}`,
		description: `How ${FIRM} collects, uses, protects and retains client information, including tax return information and the secure client portal.`,
	},
	{
		path: '/terms-of-service',
		file: 'terms-of-service.html',
		title: `Terms of Service | ${FIRM}`,
		description: `Terms that apply when you use the ${FIRM} website and client services.`,
	},
];

const MIME = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.webp': 'image/webp',
	'.avif': 'image/avif',
	'.ico': 'image/x-icon',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.txt': 'text/plain; charset=utf-8',
	'.xml': 'application/xml',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Read the untouched app shell once, before anything in dist/ is overwritten.
const shell = await readFile(path.join(DIST, 'index.html'), 'utf8');
if (!shell.includes('<div id="root"></div>')) {
	console.error('[prerender] dist/index.html is already prerendered or has no empty #root. Run a fresh `vite build` first.');
	process.exit(1);
}
const shellScriptSrcs = [...shell.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);

// GitHub Pages serves 404.html for unknown URLs. Keep it as the plain app
// shell so a bad link still loads the app (and still answers 404).
await writeFile(path.join(DIST, '404.html'), shell, 'utf8');

// Tiny static server for dist/ that always answers routes with the original shell.
const server = createServer(async (req, res) => {
	const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
	const ext = path.extname(urlPath);
	if (!ext || ext === '.html') {
		res.writeHead(200, { 'Content-Type': MIME['.html'] });
		return res.end(shell);
	}
	const filePath = path.join(DIST, urlPath);
	if (!filePath.startsWith(DIST)) {
		res.writeHead(403);
		return res.end();
	}
	try {
		const body = await readFile(filePath);
		res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
		res.end(body);
	} catch {
		res.writeHead(404);
		res.end();
	}
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({ headless: true, args: ['--lang=en-US', '--no-sandbox'] });
let failed = false;

try {
	for (const route of ROUTES) {
		const page = await browser.newPage();
		await page.setViewport({ width: 1366, height: 900 });
		await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });
		await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
		page.on('pageerror', (err) => console.warn(`[prerender] ${route.path} page error: ${err.message}`));

		// Block outside requests (fonts, analytics, form services) so the build
		// is fast and nothing is sent anywhere. Layout and text are unaffected.
		await page.setRequestInterception(true);
		page.on('request', (req) => (req.url().startsWith(origin) || req.url().startsWith('data:') ? req.continue() : req.abort()));

		await page.goto(origin + route.path, { waitUntil: 'networkidle0', timeout: 60000 });
		await page.waitForSelector('#root > *', { timeout: 30000 });

		// Scroll through the page so scroll-triggered sections (the stat
		// counters, fade-ins) render their final values, then let them settle.
		await page.evaluate(async () => {
			const step = Math.max(200, Math.floor(window.innerHeight * 0.8));
			for (let y = 0; y <= document.body.scrollHeight; y += step) {
				window.scrollTo(0, y);
				await new Promise((r) => setTimeout(r, 120));
			}
			window.scrollTo(0, 0);
		});
		await sleep(3000);

		// Count visible words before anything is changed or hidden.
		const words = (await page.evaluate(() => document.getElementById('root').innerText)).split(/\s+/).filter(Boolean).length;

		const html = await page.evaluate(
			({ route, site, shellScriptSrcs }) => {
				const head = document.head;
				const setMeta = (attr, key, value) => {
					let el = head.querySelector(`meta[${attr}="${key}"]`);
					if (!el) {
						el = document.createElement('meta');
						el.setAttribute(attr, key);
						head.appendChild(el);
					}
					el.setAttribute('content', value);
				};
				const url = site + (route.path === '/' ? '/' : route.path);
				if (route.title) {
					document.title = route.title;
					setMeta('property', 'og:title', route.title);
				}
				if (route.description) {
					setMeta('name', 'description', route.description);
					setMeta('property', 'og:description', route.description);
				}
				setMeta('property', 'og:url', url);
				let canonical = head.querySelector('link[rel="canonical"]');
				if (!canonical) {
					canonical = document.createElement('link');
					canonical.setAttribute('rel', 'canonical');
					head.appendChild(canonical);
				}
				canonical.setAttribute('href', url);

				// Keep only the app's own bundle and JSON-LD. Anything a library
				// injected while running would otherwise run twice for visitors.
				document.querySelectorAll('script').forEach((s) => {
					const src = s.getAttribute('src');
					const keep = s.type === 'application/ld+json' || (src && shellScriptSrcs.includes(src));
					if (!keep) s.remove();
				});
				// Drop preload hints for lazy chunks pulled in at runtime; the app requests them itself.
				document.querySelectorAll('link[rel="modulepreload"]').forEach((l) => l.remove());

				// Portals (menus, dialogs) mount into #portal-root at runtime; start it empty.
				document.getElementById('portal-root')?.replaceChildren();

				// Keep the saved HTML in the file for crawlers, but don't paint it:
				// React replaces it on startup, and painting it first would replay
				// the entrance animations. App.tsx removes this attribute once
				// React has rendered, so visitors see exactly what they see today.
				document.getElementById('root').setAttribute('data-prerendered', '');
				const hide = document.createElement('style');
				hide.textContent = '#root[data-prerendered]{visibility:hidden}';
				head.appendChild(hide);

				return '<!doctype html>\n' + document.documentElement.outerHTML;
			},
			{ route, site: SITE, shellScriptSrcs },
		);

		if (words < 20) {
			console.error(`[prerender] ${route.path}: only ${words} words rendered. Not writing it.`);
			failed = true;
		} else {
			const out = path.join(DIST, route.file);
			await mkdir(path.dirname(out), { recursive: true });
			await writeFile(out, html, 'utf8');
			console.log(`[prerender] ${route.path} -> ${route.file} (${words} words)`);
		}
		await page.close();
	}
} finally {
	await browser.close();
	server.close();
}

if (failed) process.exit(1);
