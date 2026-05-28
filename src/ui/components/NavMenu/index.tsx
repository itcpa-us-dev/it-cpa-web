import './NavMenu.scss';
import { NavLink } from 'react-router-dom';
import { scrollToWithBezier } from '../../../utils/Scroll';
import { useAppDispatch, useAppSelector } from '../../../store';
import { toggleHeadbar } from '../../../store/slice/displaySlice';
import HamburgerButton from '../Button/Hamburger';
import ThemeSwitch from '../ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';
import data from '../../../data';

const NavMenu = () => {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.theme.language);
	const headbarOpen = useAppSelector((state) => state.display.headbarOpen);
	const navbarData = language === 'vn' ? data.vn.navbar : data.en.navbar;
	const theme = useAppSelector((state) => state.theme.theme);

	const scrollTo = (href: string) => {
		dispatch(toggleHeadbar());
		const el = document.querySelector(href);
		if (el)
			scrollToWithBezier(
				window,
				el ? el.getBoundingClientRect().top + window.scrollY : 0,
				500,
				[1, -0.078, 0.419, -0.21],
			);
	};
	return (
		<div
			className={`nav-menu ${headbarOpen ? 'nav-menu--shown' : ''} ${`nav-menu--${theme}`}`}>
			<ul className="nav-menu__list">
				<li>
					<HamburgerButton className="nav-menu__hamburger" />
				</li>
				<li
					className="nav-menu__list__item"
					style={{ animationDelay: '200ms' }}>
					<NavLink to="#hero" onClick={() => scrollTo('#hero')}>
						{navbarData.home}
					</NavLink>
				</li>
				<li
					className="nav-menu__list__item"
					style={{ animationDelay: '300ms' }}>
					<NavLink to="#services" onClick={() => scrollTo('#services')}>
						{navbarData.services}
					</NavLink>
				</li>
				<li
					className="nav-menu__list__item"
					style={{ animationDelay: '400ms' }}>
					<NavLink to="#pricing" onClick={() => scrollTo('#pricing')}>
						{navbarData.pricing}
					</NavLink>
				</li>
				<li
					className="nav-menu__list__item"
					style={{ animationDelay: '500ms' }}>
					<NavLink to="#about" onClick={() => scrollTo('#about')}>
						{navbarData.about}
					</NavLink>
				</li>
				<li
					className="nav-menu__list__item"
					style={{ animationDelay: '600ms' }}>
					<NavLink to="#contact" onClick={() => scrollTo('#contact')}>
						{navbarData.contact}
					</NavLink>
				</li>
				<li
					className="nav-menu__list__item"
					style={{ animationDelay: '700ms' }}>
					<div className="nav-menu__list__item__actions">
						<ThemeSwitch className="nav-menu__list__item__actions__item nav-menu__list__item__actions__item--theme-switch" />
						<LanguageSwitch className="nav-menu__list__item__actions__item nav-menu__list__item__actions__item--language-switch" />
						<button className="nav-menu__list__item__actions__item nav-menu__list__item__actions__item--login">
							{language === 'vn' ? 'Đăng Nhập' : 'Login'}
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default NavMenu;
