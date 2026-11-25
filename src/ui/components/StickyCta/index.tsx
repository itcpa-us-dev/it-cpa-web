import './StickyCta.scss';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store';
import { pageData, firmPhone } from '../../../data';
import { scrollTo } from '../../../utils/Scroll';
import Icon from '../Icon';

/**
 * Always-reachable "contact us" actions.
 * - Phones: a bottom bar with "Call" (tap to dial) and "Book Consultation".
 * - Larger screens: one floating "Book Consultation" button.
 * Hidden while the hero (which has its own buttons) or the contact form is on screen,
 * so it never covers the thing it points to.
 */
const StickyCta = () => {
	const language = useAppSelector((state) => state.theme.language);
	const labels = (language === 'vn' ? pageData.vn : pageData.en).stickyCta;
	const [heroVisible, setHeroVisible] = useState(true);
	const [contactVisible, setContactVisible] = useState(false);

	useEffect(() => {
		const hero = document.getElementById('hero');
		const contact = document.getElementById('contact');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.target === hero) setHeroVisible(entry.isIntersecting);
					if (entry.target === contact) setContactVisible(entry.isIntersecting);
				}
			},
			{ threshold: 0.15 },
		);
		if (hero) observer.observe(hero);
		if (contact) observer.observe(contact);
		return () => observer.disconnect();
	}, []);

	const hidden = heroVisible || contactVisible;

	return (
		<div
			className={`sticky-cta ${hidden ? 'sticky-cta--hidden' : ''}`}
			aria-hidden={hidden}>
			<a
				className="button button--hollow sticky-cta__call"
				href={firmPhone.href}
				tabIndex={hidden ? -1 : 0}>
				<Icon name="phone" size="small" />
				<span>{labels.call}</span>
			</a>
			<button
				type="button"
				className="button button--citron button--icon-right sticky-cta__book"
				tabIndex={hidden ? -1 : 0}
				onClick={() => scrollTo('#contact')}>
				<span>{labels.bookConsultation}</span>
				<Icon name="arrow-small-right" size="small" />
			</button>
		</div>
	);
};

export default StickyCta;
