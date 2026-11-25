import IVYTRUONG from '../../assets/images/ivy-transparent.webp';
import TONYHOANG from '../../assets/images/tony-transparent.webp';
import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import { useReveal } from '../../utils/Reveal';
import './_About.scss';

const About = () => {
	const { ref, inView } = useReveal();
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const aboutData = data.about;
	const [ivyLink, tonyLink] = data.footer.principals;

	const people = [
		{ key: 'ivy', person: aboutData.ivy, image: IVYTRUONG, width: 1023, height: 1390, linkedin: ivyLink?.href },
		{ key: 'tony', person: aboutData.tony, image: TONYHOANG, width: 842, height: 1264, linkedin: tonyLink?.href },
	];

	return (
		<section
			id="about"
			className={`about ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="about-title">
			<p className="eyebrow reveal">{aboutData.label}</p>
			<h2 id="about-title" className="section-title about__title">
				<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
					{aboutData.title1}
				</span>
				<span
					className="section-title__accent reveal"
					style={{ '--d': '160ms' } as React.CSSProperties}>
					{aboutData.title2}
				</span>
			</h2>

			<div className="about__people">
				{people.map(({ key, person, image, width, height, linkedin }, index) => (
					<article
						key={key}
						className="about__person reveal"
						style={{ '--d': `${240 + index * 120}ms` } as React.CSSProperties}>
						<div className="about__person__photo">
							<img
								className="prevent-select"
								src={image}
								alt={`${person.name}, ${person.designation}`}
								width={width}
								height={height}
								loading="lazy"
							/>
						</div>
						<div className="about__person__body">
							<p className="font-mono uppercase text--citron about__person__role">{person.title}</p>
							<h3 className="flex items-center font-heading about__person__name">
								<span>{person.name}</span>
								<span className="font-mono about__person__designation">{person.designation}</span>
							</h3>
							<p className="font-heading about__person__description">{person.description}</p>
							{linkedin && (
								<a
									className="font-mono uppercase about__person__link"
									href={linkedin}
									target="_blank"
									rel="noopener noreferrer">
									LinkedIn ↗
									<span className="sr-only">
										{' '}
										({person.name}, {language === 'vn' ? 'mở trong tab mới' : 'opens in a new tab'})
									</span>
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default About;
