import './NavMenu.scss';
import { useEffect } from 'react';
import { scrollTo } from '../../../utils/Scroll';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setHeadbarState } from '../../../store/slice/displaySlice';
import { pageData, clientPortalUrl, firmPhone } from '../../../data';
import Icon from '../Icon';

const NavMenu = () => {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.theme.language);
	const headbarOpen = useAppSelector((state) => state.display.headbarOpen);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const theme = useAppSelector((state) => state.theme.theme);

	const close = () => dispatch(setHeadbarState(false));

	// Lock page scroll while the menu is open; close on Escape
	useEffect(() => {
		const previous = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') dispatch(setHeadbarState(false));
		};
		document.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = previous;
			document.removeEventListener('keydown', onKey);
		};
	}, [dispatch]);

	const go = (href: string) => {
		close();
		// Wait a frame so the page can scroll again before we move it
		requestAnimationFrame(() => scrollTo(href));
	};

	return (
		<div
			id="nav-menu"
			className={`nav-menu ${headbarOpen ? 'nav-menu--shown' : ''} nav-menu--${theme}`}>
			<ul className="nav-menu__list">
				{Object.entries(data.navbar).map(([key, value], index) => {
					const target = key === 'home' ? 'hero' : key;
					return (
						<li
							className="nav-menu__list__item"
							style={{ animationDelay: `${(index + 1) * 60}ms` }}
							key={`nav-menu__list__item-${key}`}>
							<a
								href={`#${target}`}
								onClick={(e) => {
									e.preventDefault();
									go(`#${target}`);
								}}>
								<span className="nav-menu__list__item__link__text">{value}</span>
							</a>
						</li>
					);
				})}

				<li
					className="nav-menu__list__item"
					style={{ animationDelay: `${(Object.keys(data.navbar).length + 1) * 60}ms` }}>
					<div className="flex flex-column nav-menu__list__item__actions">
						<button
							type="button"
							className="button button--citron nav-menu__list__item__actions__item nav-menu__list__item__actions__item--book-consultation"
							onClick={() => go('#contact')}>
							{data.stickyCta.bookConsultation}
						</button>
						<a
							className="button button--hollow nav-menu__list__item__actions__item"
							href={firmPhone.href}>
							<Icon name="phone" size="small" />
							<span>{firmPhone.display}</span>
						</a>
						<a
							className="button button--hollow nav-menu__list__item__actions__item"
							href={clientPortalUrl}
							target="_blank"
							rel="noopener noreferrer">
							{data.stickyCta.login}
						</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default NavMenu;
