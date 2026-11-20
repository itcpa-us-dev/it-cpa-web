import { useInView } from 'react-intersection-observer';
import IVYTRUONG from '../../assets/images/ivy-transparent.webp';
import TONYHOANG from '../../assets/images/tony-transparent.webp';
import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import './_About.scss';

const About = () => {
	const language = useAppSelector((state) => state.theme.language);
	const aboutData = language === 'vn' ? pageData.vn.about : pageData.en.about;

	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	return (
		<section
			id="about"
			className={`flex flex-column relative about ${inView ? 'about--shown' : ''}`}
			ref={ref}>
			<div className="font-heading absolute about__header">
				<h1 className="text--alabaster about__header__label">{aboutData.label}</h1>
			</div>
			<div className="about__content">
				<div className="about__content__title">
					<p className="font-mono uppercase font-weight-200 text--obsidian about__content__title__header">
						{aboutData.label}
					</p>
					<div className="about__content__title__titles">
						<h1 className="font-heading text--obsidian" style={{ animationDelay: '0ms' }}>{aboutData.title1}</h1>
						<h1 className="font-heading text--obsidian" style={{ animationDelay: '100ms' }}>{aboutData.title2}</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-center about__people">
				<div className="flex flex-column relative about__people__person about__people__person--ivy">
					<img className="absolute about__people__person__image about__people__person__image--ivy prevent-select" src={IVYTRUONG} alt="Ivy Truong, CPA" />
					<p className="font-mono text--citron about__people__person__title">
						{aboutData.ivy.title}
					</p>
					<div className="flex flex-row items-center about__people__person__info">
						<h1 className="font-heading text--obsidian relative about__people__person__info__name">
							{aboutData.ivy.name}
						</h1>
						<span className="font-mono flex text--obsidian flex-row justify-center font-weight-200 about__people__person__info__designation">
							{aboutData.ivy.designation}
						</span>
					</div>
					<p className="font-heading text--obsidian about__people__person__description">
						{aboutData.ivy.description}
					</p>
				</div>
				<div className="flex flex-column relative about__people__person about__people__person--tony">
					<img className="absolute about__people__person__image about__people__person__image--tony prevent-select" src={TONYHOANG} alt="Tony Hoang, EA" />
					<p className="font-mono text--citron about__people__person__title">
						{aboutData.tony.title}
					</p>
					<div className="flex flex-row items-center about__people__person__info">
						<h1 className="font-heading text--obsidian relative about__people__person__info__name">
							{aboutData.tony.name}
						</h1>
						<span className="font-mono flex text--obsidian flex-row justify-center font-weight-200 about__people__person__info__designation">
							{aboutData.tony.designation}
						</span>
					</div>
					<p className="font-heading text--obsidian about__people__person__description">
						{aboutData.tony.description}
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
