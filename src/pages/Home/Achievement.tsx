import './Home.scss';
import StringUtil from '../../utils/String';
import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import { CountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';

const Achievement = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const { achievements } = data;
	const strips = 5;
	let classes = `flex flex-column justify-center align-center relative background--obsidian overflow-hidden achievement ${inView ? 'achievement--shown' : ''}`;
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<section id="achievement" className={classes} ref={ref}>
			<div className="absolute achievement__background">
				{Array.from({ length: strips }).map((_, index) => (
					<div
						key={index}
						className="flex absolute background--alabaster achievement__background__strip"
						style={{ left: `${(index / strips) * 100}%` }}></div>
				))}
			</div>
			<div className="flex flex-column relative achievement__content">
				<div className="flex achievement__content__intro">
					<div className="achievement__content__intro__left">
						<span className="font-mono uppercase text--citron achievement__content__intro__left__heading">
							{achievements.heading}
						</span>
						<div className="font-heading text--alabaster achievement__content__intro__left__titles">
							<h1 style={{ animationDelay: '0ms' }}>
								{achievements.titleLine1}
							</h1>
							<h1 style={{ animationDelay: '100ms' }}>
								{achievements.titleLine2}
							</h1>
							<h1 style={{ animationDelay: '200ms' }}>
								{achievements.titleLine3}
							</h1>
						</div>
					</div>
					<div className="achievement__content__intro__right">
						<div className="font-mono text--alabaster achievement__content__intro__right__description">
							<p>{achievements.description}</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-between achievement__content__stats">
					{achievements.stats.map((item, index) => (
						<div
							key={item.id}
							className="achievement__content__stats__item"
							style={{ animationDelay: `${index * 200}ms` }}>
							<div className="text--citron font-mono achievement__content__stats__item__value">
								{item.sign && (
									<span className="achievement__content__stats__item__sign">
										{item.sign}
									</span>
								)}
								{item.value && (
									<CountUp isCounting end={item.value} duration={5} />
								)}
								{item.unit && (
									<span className="achievement__content__stats__item__unit">
										{item.unit}
									</span>
								)}
							</div>
							<p className="font-mono text--alabaster achievement__content__stats__item__label">
								{item.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Achievement;
