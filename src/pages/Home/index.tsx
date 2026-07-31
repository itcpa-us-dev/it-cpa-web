import './Home.scss';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Pricing from './Pricing';
import ImageSlider from './ImageSlider';
import Achievement from './Achievement';
import Insights from './Insights';
import { ToastContainer } from 'react-toastify';
import Button from '../../ui/components/Button/Button';
import Icon from '../../ui/components/Icon';
import { useAppSelector } from '../../store';
import { scrollToWithBezier } from '../../utils/Scroll';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
	const location = useLocation();
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

	useEffect(() => {
		// Check if a target section ID was passed in navigation state
		if (location.state && location.state.scrollToId) {
			const id = location.state.scrollToId;
			const element = document.getElementById(id);

			if (element) {
				// Scroll smoothly to the target element
				element.scrollIntoView({ behavior: 'smooth' });
			}

			// Optional: Clear state so it doesn't scroll again on manual page reloads
			window.history.replaceState({}, document.title);
		}
	}, [location]);
	const language = useAppSelector((state) => state.theme.language);
	return (
		<div className="home">
			<Hero />
			<ImageSlider direction="left" />
			<Achievement />
			<Services />
			<Pricing />
			<About />
			<ImageSlider direction="right" />
			<Insights />
			<Contact />
			<ToastContainer />
			<Button
				className="button button--citron-contrast button--icon-right home--consultation"
				type="button"
				onClick={() => scrollTo('#contact')}>
				<span>
					{language === 'vn' ? 'Đặt lịch tư vấn' : 'Book Consultation'}
				</span>
				<Icon name="arrow-small-right" size="small" />
			</Button>
		</div>
	);
};

export default Home;
