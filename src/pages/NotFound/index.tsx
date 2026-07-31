import { type JSX } from 'react';
import './NotFound.scss';
import StringUtil from '../../utils/String';
import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import Button from '../../ui/components/Button/Button';
import Icon from '../../ui/components/Icon';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';

interface RootState {
	theme: {
		language: string;
	};
}

interface NavigateState {
	scrollToId: string;
}

const NotFound = (): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();
	const language: string = useAppSelector(
		(state: RootState) => state.theme.language,
	);
	const notFoundData =
		language === 'en' ? pageData.en.notFound : pageData.vn.notFound;
	let classes: string = `flex flex-column not-found`;
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	const requestedUrl: Location = window.location;

	const handleNavClick = (sectionId: string): void => {
		// Navigate home and pass the target element ID in the router state
		navigate('/', { state: { scrollToId: sectionId } as NavigateState });
	};
	return (
		<div className={classes}>
			<div className="flex flex-row items-center items-center not-found__top">
				<div className="flex flex-row not-found__top__logo">
					<h1 className="font-heading text--alabaster">IT</h1>
					<h1 className="font-heading text--citron">CPA</h1>
				</div>
				<div className="flex font-mono text--alabaster uppercase not-found__top__error-code">
					{notFoundData.error}
				</div>
			</div>
			<div className="flex flex-column items-center not-found__content">
				<div className="flex not-found__content__titles">
					<h1 className="font-mono text--alabaster relative">
						{notFoundData.title1}
					</h1>
					<h1 className="font-mono text--citron relative">
						{notFoundData.title2}
					</h1>
					<h1 className="font-mono text--alabaster relative">
						{notFoundData.title3}
					</h1>
				</div>
				<div className="not-found__content__tagline font-heading text--alabaster">
					<h2 className="font-heading text--alabaster not-found__content__tagline__line">
						{notFoundData.tagline1}
					</h2>
					<h2 className="font-heading text--obsidian background--citron not-found__content__tagline__line">
						{notFoundData.tagline2}
					</h2>
				</div>
				<div className="not-found__content__description font-mono text--alabaster">
					<p className="font-heading">{notFoundData.description}</p>
				</div>
				<div className="flex flex-row font-mono text--alabaster not-found__content__resquested-url">
					<span>
						{notFoundData.requestedUrl} {requestedUrl.href}
					</span>
				</div>
			</div>
			<div className="flex flex-row not-found__cta">
				<Button
					className="button button--icon-left button--citron"
					onClick={handleNavClick.bind(null, 'home')}>
					<Icon name={notFoundData.ctaBack.icon} size="small" />
					<span>{notFoundData.ctaBack.label}</span>
				</Button>
				<Button
					className="button button--icon-right button--hollow-contrast"
					onClick={handleNavClick.bind(null, 'services')}>
					<span>{notFoundData.ctaExplore.label}</span>
					<Icon name={notFoundData.ctaExplore.icon} size="small" />
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
