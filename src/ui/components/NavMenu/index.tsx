import './NavMenu.scss';
import { NavLink } from 'react-router-dom';
import { scrollToWithBezier } from '../../../utils/Scroll';
import { useAppDispatch, useAppSelector } from '../../../store';
import { toggleHeadbar } from '../../../store/slice/displaySlice';
import { pageData } from '../../../data';
import Button from '../Button/Button';

const NavMenu = () => {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.theme.language);
	const headbarOpen = useAppSelector((state) => state.display.headbarOpen);
	const navbarData =
		language === 'vn' ? pageData.vn.navbar : pageData.en.navbar;
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

	const gotoPortal = () => {
		window.open('https://itcpa-us.taxdome.com', '_blank');
	};

	return (
		<div
			className={`absolute top-0 left-0 nav-menu ${headbarOpen ? 'nav-menu--shown' : ''} ${`nav-menu--${theme}`}`}>
			<ul className="nav-menu__list">
				{Object.entries(navbarData).map(([key, value], index) => (
					<li
						className="nav-menu__list__item"
						style={{ animationDelay: `${(index + 1) * 100}ms` }}
						key={`nav-menu__list__item-${key}`}>
						<NavLink to={`#${key === 'home' ? 'hero' : key}`} onClick={() => scrollTo(`#${key === 'home' ? 'hero' : key}`)}>
							<span className="nav-menu__list__item__link__text">{value}</span>
						</NavLink>
					</li>
				))}

				<li
					className="nav-menu__list__item"
					style={{ animationDelay: '700ms' }}>
					<div className="flex flex-column nav-menu__list__item__actions">
						<Button
							className="button--contrast nav-menu__list__item__actions__item nav-menu__list__item__actions__item--login"
							onClick={gotoPortal}>
							{language === 'vn' ? 'Đăng Nhập' : 'Login'}
						</Button>
						<Button className="button--contrast nav-menu__list__item__actions__item nav-menu__list__item__actions__item--book-consultation">
							{language === 'vn' ? 'Đặt Lịch Tư Vấn' : 'Book Consultation'}
						</Button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default NavMenu;
