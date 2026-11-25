import { useAppSelector } from '../../../store';
import './Footer.scss';
import '../../../pages/Home/Home.scss';
import { pageData, firmPhone, firmEmail } from '../../../data';
import { useReveal } from '../../../utils/Reveal';

const HomeLayoutFooter = () => {
	const language = useAppSelector((state) => state.theme.language);
	const { ref, inView } = useReveal();
	const footerData = language === 'vn' ? pageData.vn.footer : pageData.en.footer;
	const legalLinks = [
		{ label: language === 'vn' ? 'Chính sách bảo mật' : 'Privacy Policy', href: '/privacy-policy' },
		{ label: language === 'vn' ? 'Điều khoản dịch vụ' : 'Terms of Service', href: '/terms-of-service' },
	];

	return (
		<footer className={`background--obsidian site-footer ${inView ? 'is-shown' : ''}`} ref={ref}>
			<div className="site-footer__inner">
				<div className="site-footer__brand reveal">
					<p className="font-mono text--citron site-footer__est">EST. 2025</p>
					<p className="font-heading site-footer__name">
						IT CPA &amp;
						<br /> Advisory, PLLC
					</p>
					<p className="font-heading site-footer__tagline">{footerData.tagline}</p>
					<div className="flex flex-column font-mono site-footer__contact">
						<a href={firmPhone.href}>{firmPhone.display}</a>
						<a href={firmEmail.href}>{firmEmail.display}</a>
					</div>
				</div>

				<nav
					className="site-footer__col reveal"
					style={{ '--d': '80ms' } as React.CSSProperties}
					aria-labelledby="footer-services">
					<h2 id="footer-services" className="font-mono text--citron site-footer__heading">
						{footerData.titles[0]}
					</h2>
					<ul>
						{footerData.services.map((service) => (
							<li key={service}>
								<a href="#services">{service}</a>
							</li>
						))}
					</ul>
				</nav>

				<nav
					className="site-footer__col reveal"
					style={{ '--d': '160ms' } as React.CSSProperties}
					aria-labelledby="footer-navigation">
					<h2 id="footer-navigation" className="font-mono text--citron site-footer__heading">
						{footerData.titles[1]}
					</h2>
					<ul>
						{footerData.navigation.map((navItem) => (
							<li key={navItem.href}>
								<a href={navItem.href}>{navItem.label}</a>
							</li>
						))}
						{legalLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href}>{link.label}</a>
							</li>
						))}
					</ul>
				</nav>

				<div
					className="site-footer__col reveal"
					style={{ '--d': '240ms' } as React.CSSProperties}>
					<h2 className="font-mono text--citron site-footer__heading">{footerData.titles[2]}</h2>
					<ul>
						{footerData.principals.map((principal) => (
							<li key={principal.href}>
								<a href={principal.href} target="_blank" rel="noopener noreferrer">
									{principal.name} ↗
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="font-mono site-footer__bottom">
				<p>{footerData.copyright.text}</p>
				<p>{footerData.copyright.slogan}</p>
			</div>
		</footer>
	);
};

export default HomeLayoutFooter;
