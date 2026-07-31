import './Home.scss';
import { pageData, states } from '../../data';
import { useAppSelector } from '../../store';
import Icon from '../../ui/components/Icon';
import { useInView } from 'react-intersection-observer';
import Button from '../../ui/components/Button/Button';
import HERO_BACKGROUND from '../../assets/images/background_2.png';
import { scrollTo } from '../../utils/Scroll';

const Hero = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const heroData = data.hero;

	return (
		<section
			id="hero"
			className={`flex flex-column font-mono hero overflow-hidden ${inView ? 'hero--shown' : ''}`}
			ref={ref}>
			<div className="flex uppercase hero__trusted">
				<Icon name="shield-check" size="small" />
				<span>{heroData.trusted}</span>
			</div>
			<div className="flex flex-row hero__content">
				<div className="flex flex-column hero__content__left">
					<div className="flex flex-column font-heading title-style title-style title-style--large hero__content__left__titles">
						<h1 style={{ animationDelay: '0ms' }}>
							{heroData.title.title1Line1}
						</h1>
						<h1 style={{ animationDelay: '100ms' }}>
							{heroData.title.title1Line2}
						</h1>
						<h1 style={{ animationDelay: '200ms' }}>
							{heroData.title.title2Line1}
						</h1>
						<h1 style={{ animationDelay: '300ms' }}>
							{heroData.title.title2Line2}
						</h1>
					</div>
					<div className="flex flex-column hero__content__left__subtitle">
						<p style={{ animationDelay: '500ms' }}>{heroData.paragraph}</p>
					</div>
					<div className="flex flex-row  hero__content__left__cta">
						<Button
							className="button button--citron button--icon-right uppercase"
							data-section="contact"
							style={{ animationDelay: '600ms' }}
							onClick={() => scrollTo('#contact')}>
							<span>{heroData.cta}</span>
							<Icon name="arrow-small-up" size="small" />
						</Button>
						<Button
							className="button button--hollow uppercase"
							data-section="service"
							style={{ animationDelay: '700ms' }}
							onClick={() => scrollTo('#services')}>
							<span>{heroData.redirect}</span>
						</Button>
					</div>
				</div>
				<div className="flex flex-column hero__content__right">
					<div className="hero__content__right__image">
						<img src={HERO_BACKGROUND} alt="Hero Background" />
					</div>
					<div className="flex flex-column hero__content__right__states">
						<h4 className="flex font-mono hero__content__right__states__title">
							{language == 'en' ? 'States Served' : 'Đã Phục Vụ Các Tiểu Bang'}
						</h4>
						<div className="flex flex-column font-mono gap-4 font-heading text--obsidian hero__content__right__states__list">
							{states.map((state, index) => (
								<span
									className="font-mono"
									key={`state-${state.name}-${index}`}>
									{state.name}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between relative hero__content__trust_badges">
				{heroData.trust_badges.map((badge, index) => (
					<div
						className="text--obsidian flex flex-row hero__content__trust_badges__item"
						key={index}>
						<Icon key={index} name={badge.icon} size="large" />
						<div className="font-mono">
							<h4>{badge.headline}</h4>
							<p>{badge.text}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-row indicator">
				<Icon name="arrow-small-down" size="medium" />
			</div>
		</section>
	);
};

export default Hero;
