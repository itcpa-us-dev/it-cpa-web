import './Navbar.scss';
import LOGO_WHITE from '../../../assets/images/IT CPA-logo.png';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';
import { useAppSelector } from '../../../store';
import pageData from '../../../data';
import { useEffect, useState } from 'react';
import { scrollToWithBezier } from '../../../utils/Scroll';
import HamburgerButton from '../Button/Hamburger';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	let classes = 'navbar';
	if (scrolled) classes += ' scrolled';

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollTo = (href: string) => {
		const el = document.querySelector(href);
		if (el)
			scrollToWithBezier(
				window,
				el ? el.getBoundingClientRect().top + window.scrollY : 0,
				500,
				[1, -0.078, 0.419, -0.21],
			);
	};

	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;

	return (
		<nav className={classes}>
			<div className="navbar__logo prevent-select">
				<NavLink
					to="#hero"
					className="navbar__logo__link"
					onClick={() => scrollTo('#hero')}>
					<img src={LOGO_WHITE} alt="Home" className="navbar__logo__icon" />
					<span className="navbar__logo__text">IT CPA & Advisory</span>
				</NavLink>
			</div>

			<ul className="navbar__list">
				<li className="navbar__list__item" style={{ animationDelay: '100ms' }}>
					<NavLink
						to="#services"
						className="navbar__list__item__link"
						onClick={() => scrollTo('#services')}>
						{data.navbar.services}
					</NavLink>
				</li>
				<li className="navbar__list__item" style={{ animationDelay: '200ms' }}>
					<NavLink
						to="#pricing"
						className="navbar__list__item__link"
						onClick={() => scrollTo('#pricing')}>
						{data.navbar.pricing}
					</NavLink>
				</li>
				<li className="navbar__list__item" style={{ animationDelay: '300ms' }}>
					<NavLink
						to="#about"
						className="navbar__list__item__link"
						onClick={() => scrollTo('#about')}>
						{data.navbar.about}
					</NavLink>
				</li>
				<li className="navbar__list__item" style={{ animationDelay: '400ms' }}>
					<NavLink
						to="#contact"
						className="navbar__list__item__link"
						onClick={() => scrollTo('#contact')}>
						{data.navbar.contact}
					</NavLink>
				</li>
			</ul>
			<div className="navbar__actions">
				<ThemeSwitch id="select-theme" />
				<LanguageSwitch id="select-language" />
				<div className="navbar__actions__button">
					<button id="login-client-portal">
						{language === 'en' ? 'Login' : 'Đăng Nhập'}
					</button>
				</div>
			</div>
			<HamburgerButton className="navbar__hamburger" />
		</nav>
	);
};

export default Navbar;
