import './Home.scss';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Pricing from './Pricing';
import ImageSlider from './ImageSlider';
import Achievement from './Achievement';
import Insights from './Insights';
import Process from './Process';
import Faq from './Faq';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollTo } from '../../utils/Scroll';

const Home = () => {
	const location = useLocation();

	// Arriving from another page with a section to show (e.g. the 404 page's "Explore Services")
	useEffect(() => {
		const id = location.state?.scrollToId || location.hash.replace('#', '');
		if (id && document.getElementById(id)) {
			scrollTo(`#${id}`);
			if (location.state?.scrollToId) window.history.replaceState({}, document.title);
		}
	}, [location]);

	// Order follows the questions a new visitor has:
	// what do you do → can I trust you → what exactly → how does it work → what does it cost → who are you → still unsure → contact
	return (
		<div className="home">
			<Hero />
			<ImageSlider direction="left" />
			<Achievement />
			<Services />
			<Process />
			<Pricing />
			<About />
			<Insights />
			<Faq />
			<Contact />
		</div>
	);
};

export default Home;
