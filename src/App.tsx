import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './ui/layout/HomeLayout';
import Home from './pages/Home';
import { useEffect, useLayoutEffect } from 'react';
import { setHeadbarState } from './store/slice/displaySlice';
import { useAppDispatch, useAppSelector } from './store';
import PrivacyPolicy from './pages/Policy/PrivacyPolicy';
import TermsOfService from './pages/Policy/TermsOfService';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		element: <HomeLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
	{
		path: '/privacy-policy',
		element: <PrivacyPolicy />,
	},
	{
		path: '/terms-of-service',
		element: <TermsOfService />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

function App() {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.theme.language);

	// Tell browsers and screen readers which language the page is in
	useEffect(() => {
		document.documentElement.lang = language === 'vn' ? 'vi' : 'en';
	}, [language]);

	// The build saves each page's HTML for search engines (scripts/prerender.mjs)
	// and keeps it hidden until React has rendered over it. Reveal the page now.
	useLayoutEffect(() => {
		document.getElementById('root')?.removeAttribute('data-prerendered');
	}, []);

	useEffect(() => {
		const handleTabClose = (e: Event) => {
			e.preventDefault();
			dispatch(setHeadbarState(false));
		};
		window.addEventListener('unload', handleTabClose);
		return () => {
			window.removeEventListener('unload', handleTabClose);
		};
	});

	return <RouterProvider router={router} />;
}

export default App;
