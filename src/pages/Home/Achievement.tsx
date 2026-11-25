import './Home.scss';
import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import { CountUp } from 'use-count-up';
import { useReveal } from '../../utils/Reveal';

const Achievement = () => {
	const { ref, inView } = useReveal();
	const language = useAppSelector((state) => state.theme.language);
	const { achievements } = language === 'vn' ? pageData.vn : pageData.en;
	const strips = 5;

	return (
		<section
			id="achievement"
			className={`relative background--obsidian overflow-hidden achievement ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="achievement-title">
			<div className="absolute achievement__background" aria-hidden="true">
				{Array.from({ length: strips }).map((_, index) => (
					<div
						key={index}
						className="absolute background--alabaster achievement__background__strip"
						style={{ left: `${(index / strips) * 100}%` }}></div>
				))}
			</div>
			<div className="relative achievement__content">
				<div className="achievement__intro">
					<div>
						<p className="font-mono uppercase text--citron achievement__eyebrow reveal">
							{achievements.heading}
						</p>
						<h2
							id="achievement-title"
							className="section-title section-title--on-dark achievement__title">
							<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
								{achievements.titleLine1}
							</span>
							<span className="reveal" style={{ '--d': '160ms' } as React.CSSProperties}>
								{achievements.titleLine2}
							</span>
							<span
								className="section-title__accent reveal"
								style={{ '--d': '240ms' } as React.CSSProperties}>
								{achievements.titleLine3}
							</span>
						</h2>
					</div>
					<p
						className="font-heading achievement__description reveal"
						style={{ '--d': '300ms' } as React.CSSProperties}>
						{achievements.description}
					</p>
				</div>
				<dl className="achievement__stats">
					{achievements.stats.map((item, index) => (
						<div
							key={item.id}
							className="achievement__stats__item reveal"
							style={{ '--d': `${300 + index * 100}ms` } as React.CSSProperties}>
							<dt className="font-mono achievement__stats__item__label">{item.label}</dt>
							<dd className="text--citron font-heading achievement__stats__item__value">
								{item.sign}
								<CountUp isCounting={inView} end={item.value} duration={2.5} />
								{item.unit}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
};

export default Achievement;
