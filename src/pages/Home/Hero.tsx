import './Home.scss';
import pageData from '../../data';
import { useAppSelector } from '../../store';
import Icon from '../../ui/components/Icon';
import { CountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;

	const handleMoveToSection = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const section = document.getElementById(
			e.currentTarget.dataset.section || '',
		);

		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id="hero"
			className={`hero ${inView ? 'hero--shown' : ''}`}
			ref={ref}>
			<div className="hero__content">
				<div className="hero__content__inner">
					<div className="hero__content__inner__subheadline">
						<Icon name="shield-check" size={'small'} />
						<p>{data.hero.subheadline}</p>
					</div>
					<div className="hero__content__inner__container hero__content__inner__container--1">
						<h1
							className="hero__content__inner__title"
							style={{ animationDelay: '100ms' }}>
							{data.hero.title.first}
						</h1>
					</div>
					<div className="hero__content__inner__container hero__content__inner__container--2">
						<h1
							className="hero__content__inner__title"
							style={{ animationDelay: '300ms' }}>
							{data.hero.title.second}
						</h1>
					</div>
					<div className="hero__content__inner__container hero__content__inner__container--3">
						<h1
							className="hero__content__inner__title"
							style={{ animationDelay: '500ms' }}>
							{data.hero.title.third}
						</h1>
					</div>
					<div className="hero__content__inner__container hero__content__inner__container--4">
						<p className="hero__content__inner__subtitle">
							{data.hero.subtitle}
						</p>
					</div>
				</div>
				<div className="hero__content__cta">
					<button
						className="hero__content__cta__btn"
						type="button"
						data-section="contact"
						onClick={handleMoveToSection}>
						{data.hero.cta}
					</button>
					<button
						className="hero__content__cta__btn"
						type="button"
						data-section="services"
						onClick={handleMoveToSection}>
						<p>{data.hero.redirect}</p>
					</button>
				</div>
				<div className="hero__content__trust-badges">
					{data.hero.trust_badges.map((badge, index) => (
						<div className="hero__content__trust-badges__item" key={index}>
							<div className="hero__content__trust-badges__item__icon">
								<Icon name={badge.icon} size="large" />
							</div>
							<div className="hero__content__trust-badges__item__text">
								<h4>{badge.headline}</h4>
								<p>{badge.text}</p>
							</div>
						</div>
					))}
				</div>
				<div className="hero__content__statistics">
					<div className="hero__content__statistics__heading">
						<div className="hero__content__statistics__heading__left">
							<h4>{data.hero.statistics.subheading}</h4>
							<h2>{data.hero.statistics.heading}</h2>
						</div>
						<div className="hero__content__statistics__heading__right">
							<p>{data.hero.statistics.description}</p>
						</div>
					</div>
					<div className="hero__content__statistics__stats">
						<ul>
							{data.hero.statistics.stats.map((item) => (
								<li key={item.id}>
									<div className="hero__content__statistics__stats__icon">
										<Icon name={item.icon} size="medium" />
									</div>
									<div className="hero__content__statistics__stats__text">
										<h4>
											{item.sign}
											<CountUp isCounting end={item.value} duration={5} />
											{item.unit}
										</h4>
										<p>{item.label}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
