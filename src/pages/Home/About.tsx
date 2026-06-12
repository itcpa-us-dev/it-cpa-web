import { useInView } from 'react-intersection-observer';
import IVYTRUONG from '../../assets/images/ivy-transparent.png';
import TONYHOANG from '../../assets/images/tony-transparent.png';
import data from '../../data';
import { useAppSelector } from '../../store';
import './_About.scss';

const About = () => {
	const language = useAppSelector((state) => state.theme.language);
	const aboutData = language === 'vn' ? data.vn.about : data.en.about;

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	return (
		<section
			id="about"
			className={`about ${inView ? 'about--shown' : ''}`}
			ref={ref}>
			<div className="about__content">
				<h4 className="about__content__subheadline">{aboutData.subheadline}</h4>
				<h2 className="about__content__headline ">{aboutData.headlineOne}</h2>
				<h2 className="about__content__headline ">{aboutData.headlineTwo}</h2>
			</div>
			<div className="about__container">
				<div className="about__container__left">
					<span className="about__container__left__name"></span>
					<img src={IVYTRUONG} alt={aboutData.ivy.name} />
					<div className="about__container__left__info">
						<div className="about__container__left__info__title">
							<h5>{aboutData.ivy.title}</h5>
							<h2>{aboutData.ivy.name}</h2>
						</div>
						<div className="about__container__left__info__details">
							<p>{aboutData.ivy.designation}</p>
						</div>
					</div>
					<div className="about__container__details">
						<p>{aboutData.ivy.description}</p>
					</div>
				</div>
				<div className="about__container__right">
					<span className="about__container__right__name"></span>
					<img src={TONYHOANG} alt={aboutData.tony.name} />
					<div className="about__container__right__info">
						<div className="about__container__right__info__title">
							<h5>{aboutData.tony.title}</h5>
							<h2>{aboutData.tony.name}</h2>
						</div>
						<div className="about__container__right__info__details">
							<p>{aboutData.tony.designation}</p>
						</div>
					</div>
					<div className="about__container__details">
						<p>{aboutData.tony.description}</p>
					</div>
				</div>
			</div>
			<div className="about__extra">
				<p>{aboutData.slogan}</p>
			</div>
		</section>
	);
};

export default About;
