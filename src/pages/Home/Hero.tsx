import './Home.scss';
import { pageData, states, firmPhone } from '../../data';
import { useAppSelector } from '../../store';
import Icon from '../../ui/components/Icon';
import HERO_IMAGE from '../../assets/images/background_2.webp';
import { scrollTo } from '../../utils/Scroll';
import { useReveal } from '../../utils/Reveal';

const Hero = () => {
	const { ref, inView } = useReveal();
	const language = useAppSelector((state) => state.theme.language);
	const heroData = (language === 'vn' ? pageData.vn : pageData.en).hero;
	const { title } = heroData;

	return (
		<section
			id="hero"
			className={`hero ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="hero-title">
			<div className="hero__grid">
				<div className="hero__copy">
					<p className="flex items-center font-mono uppercase hero__trusted reveal">
						<Icon name="shield-check" size="small" className="background--citron" />
						<span>{heroData.trusted}</span>
					</p>
					<h1 id="hero-title" className="hero__title">
						<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
							{title.title1Line1} {title.title1Line2}
						</span>
						<span className="reveal" style={{ '--d': '160ms' } as React.CSSProperties}>
							{title.title2Line1}{' '}
							<span className="hero__title__accent">{title.title2Line2}</span>
						</span>
					</h1>
					<p
						className="font-heading hero__lead reveal"
						style={{ '--d': '260ms' } as React.CSSProperties}>
						{heroData.paragraph}
					</p>
					<div
						className="flex flex-wrap hero__cta reveal"
						style={{ '--d': '340ms' } as React.CSSProperties}>
						<button
							type="button"
							className="button button--citron button--icon-right hero__cta__primary"
							onClick={() => scrollTo('#contact')}>
							<span>{heroData.cta}</span>
							<Icon name="arrow-small-right" size="small" />
						</button>
						<a className="button button--hollow hero__cta__secondary" href={firmPhone.href}>
							<Icon name="phone" size="small" />
							<span>{heroData.callCta}</span>
						</a>
					</div>
					<ul
						className="flex flex-wrap font-mono hero__credentials reveal"
						style={{ '--d': '420ms' } as React.CSSProperties}>
						{heroData.credentials.map((item) => (
							<li key={item} className="flex items-center">
								<Icon name="check" size="small" className="background--citron" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>

				<div
					className="hero__visual reveal"
					style={{ '--d': '200ms' } as React.CSSProperties}>
					<img
						className="hero__visual__image"
						src={HERO_IMAGE}
						alt=""
						width={1376}
						height={768}
						fetchPriority="high"
					/>
					<div className="hero__states">
						<p className="font-mono uppercase hero__states__title">
							{language === 'vn' ? 'Tiểu Bang Phục Vụ' : 'States Served'}
						</p>
						<div className="hero__states__window" aria-hidden="true">
							<div className="hero__states__list">
								{[...states, ...states].map((state, index) => (
									<span key={`state-${state.abbreviation}-${index}`}>{state.name}</span>
								))}
							</div>
						</div>
						<p className="font-mono hero__states__summary">{heroData.statesSummary}</p>
					</div>
				</div>
			</div>

			<ul className="hero__badges">
				{heroData.trust_badges.map((badge, index) => (
					<li
						className="flex hero__badges__item reveal"
						style={{ '--d': `${500 + index * 80}ms` } as React.CSSProperties}
						key={badge.id}>
						<span className="hero__badges__item__icon">
							<Icon name={badge.icon} size="small" className="background--citron" />
						</span>
						<div>
							<h2 className="font-heading hero__badges__item__headline">{badge.headline}</h2>
							<p className="font-mono hero__badges__item__text">{badge.text}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Hero;
