import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';
import { useAppSelector } from '../../../store';
import { pageData, clientPortalUrl } from '../../../data';
import { scrollTo } from '../../../utils/Scroll';
import HamburgerButton from '../Button/Hamburger';
import Icon from '../Icon';

const Navbar = () => {
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;

	return (
		<nav
			className="flex flex-row mx-auto items-center fixed top-0 left-0 right-0 navbar"
			aria-label={language === 'vn' ? 'Điều hướng chính' : 'Main navigation'}>
			<div className="flex flex-row flex-grow mx-auto justify-between items-center background--transparent navbar__container">
				<div className="navbar__logo prevent-select">
					<NavLink
						to="/"
						aria-label="IT CPA & Advisory, PLLC"
						className="flex flex-row items-center font-mono gap-3 navbar__logo__link"
						onClick={(e) => {
							e.preventDefault();
							scrollTo('#hero');
						}}>
						<div>
							<span className="navbar__logo__text navbar__logo__text--1">IT</span>
							<span className="navbar__logo__text navbar__logo__text--2">CPA</span>
						</div>
						<div>
							<span className="navbar__logo__text navbar__logo__text--3">
								& Advisory
							</span>
						</div>
					</NavLink>
				</div>
				<ul className="flex flex-row font-mono uppercase navbar__list">
					{Object.entries(data.navbar).map(([key, value]) => {
						const target = key === 'home' ? 'hero' : key;
						return (
							<li className="font-mono navbar__list__item" key={key}>
								<a
									href={`#${target}`}
									className="navbar__list__item__link"
									onClick={(e) => {
										e.preventDefault();
										scrollTo(`#${target}`);
									}}>
									{value}
								</a>
							</li>
						);
					})}
				</ul>
				<div className="flex flex-row items-center font-mono navbar__actions">
					<LanguageSwitch id="select-language" />
					<ThemeSwitch id="select-theme" />
					<a
						className="navbar__actions__login"
						href={clientPortalUrl}
						target="_blank"
						rel="noopener noreferrer">
						<Icon name="user" size="small" />
						<span>{data.stickyCta.login}</span>
					</a>
					<button
						type="button"
						className="button button--citron button--icon-right navbar__actions__cta"
						onClick={() => scrollTo('#contact')}>
						<span>{data.stickyCta.bookConsultation}</span>
						<Icon name="arrow-small-right" size="small" />
					</button>
					<HamburgerButton className="navbar__hamburger" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
