import { type JSX } from 'react';
import './NotFound.scss';
import { pageData, firmPhone } from '../../data';
import { useAppSelector } from '../../store';
import Icon from '../../ui/components/Icon';
import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const notFoundData = data.notFound;
	// Show just the path ("/old-page"), not the whole URL: shorter and easier to read
	const requestedPath = `${window.location.pathname}${window.location.search}`;

	return (
		<div className="not-found">
			<header className="not-found__top">
				<Link to="/" className="font-heading not-found__logo" aria-label="IT CPA & Advisory, PLLC">
					<span className="not-found__logo__it">IT</span>
					<span className="not-found__logo__cpa">CPA</span>
				</Link>
				<span className="font-mono uppercase not-found__code">{notFoundData.error}</span>
			</header>

			<main className="not-found__content">
				<p className="font-heading not-found__digits" aria-hidden="true">
					<span>{notFoundData.title1}</span>
					<span className="not-found__digits__accent">{notFoundData.title2}</span>
					<span>{notFoundData.title3}</span>
				</p>

				<h1 className="font-heading not-found__title">
					<span>{notFoundData.tagline1}</span>{' '}
					<span className="not-found__title__accent">{notFoundData.tagline2.trim()}</span>
				</h1>

				<p className="font-heading not-found__description">{notFoundData.description}</p>

				<p className="font-mono not-found__path">
					<span className="not-found__path__label">{notFoundData.requestedUrl}</span>
					<code>{requestedPath}</code>
				</p>

				<div className="not-found__cta">
					<Link className="button button--citron button--icon-left not-found__cta__primary" to="/">
						<Icon name={notFoundData.ctaBack.icon} size="small" />
						<span>{notFoundData.ctaBack.label}</span>
					</Link>
					<Link
						className="button button--hollow-contrast button--icon-right not-found__cta__secondary"
						to="/"
						state={{ scrollToId: 'services' }}>
						<span>{notFoundData.ctaExplore.label}</span>
						<Icon name={notFoundData.ctaExplore.icon} size="small" />
					</Link>
				</div>

				<p className="font-mono not-found__help">
					{data.contact.callLabel}{' '}
					<a href={firmPhone.href}>{firmPhone.display}</a>
				</p>
			</main>
		</div>
	);
};

export default NotFound;
