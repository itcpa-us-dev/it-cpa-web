import './Header.scss';
import Navbar from '../Navbar';
import { useEffect, useState } from 'react';

const HomeLayoutHeader = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<header
			className={`home-layout__header ${scrolled ? 'home-layout__header--scrolled' : ''}`}>
			<Navbar />
		</header>
	);
};

export default HomeLayoutHeader;
