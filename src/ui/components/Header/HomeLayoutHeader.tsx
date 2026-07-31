import './Header.scss';
import Navbar from '../Navbar';
import { useEffect, useState } from 'react';

const HomeLayoutHeader = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
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
