import './Home.scss';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Pricing from './Pricing';
const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Services />
			<Pricing />
			<About />
			<Contact />
		</div>
	);
};

export default Home;
