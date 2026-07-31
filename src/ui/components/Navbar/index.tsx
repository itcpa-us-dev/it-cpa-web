import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';
import { useAppSelector } from '../../../store';
import { pageData } from '../../../data';
import { scrollTo } from '../../../utils/Scroll';
import HamburgerButton from '../Button/Hamburger';
import Button from '../Button/Button';
import StringUtil from '../../../utils/String';

const Navbar = () => {
	let classes =
		'flex flex-row mx-auto max-w-[1440px] items-center fixed top-0 left-0 right-0 navbar';
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const gotoPortal = () => {
		window.open('https://itcpa-us.taxdome.com', '_blank');
	};
	return (
		<nav className={classes}>
			<div className="flex flex-row flex-grow mx-auto justify-between items-center background--transparent navbar__container">
				<div className={` navbar__logo prevent-select`}>
					<NavLink
						to="#hero"
						className="flex flex-row font-mono gap-3 navbar__logo__link"
						onClick={() => scrollTo('#hero')}>
						<div>
							<span className="navbar__logo__text navbar__logo__text--1">
								IT
							</span>
							<span className="navbar__logo__text navbar__logo__text--2">
								CPA
							</span>
						</div>
						<div>
							<span className="navbar__logo__text navbar__logo__text--3">
								& Advisory
							</span>
						</div>
					</NavLink>
				</div>
				<ul className="flex flex-row gap-8 font-mono uppercase navbar__list">
					{Object.entries(data.navbar).map(([key, value], index) => (
						<li
							className="font-mono navbar__list__item"
							style={{ animationDelay: `${(index + 1) * 100}ms` }}
							key={key}>
							<NavLink
								to={`#${key}`}
								className="navbar__list__item__link"
								onClick={() => scrollTo(`#${key === 'home' ? 'hero' : key}`)}>
								{value}
							</NavLink>
						</li>
					))}
				</ul>
				<div className="flex flex-row font-mono gap-8 navbar__actions">
					<LanguageSwitch id="select-language" />
					<ThemeSwitch id="select-theme" />
					<div className="navbar__actions__button">
						<Button
							className="flex flex-row flex-center button button--contrast"
							id="login-button"
							onClick={gotoPortal}>
							{language === 'en' ? 'Login' : 'Đăng Nhập'}
						</Button>
					</div>
					<HamburgerButton className="navbar__hamburger" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
