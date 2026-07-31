import { useAppSelector } from '../../store';
import StringUtil from '../../utils/String';
import { pageData } from '../../data';
import './Home.scss';
import NewsItem from '../../ui/components/NewsItem';
import { useInView } from 'react-intersection-observer';

const Insights = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.4,
	});
	let classes = `flex flex-column insights ${inView ? 'insights--shown' : ''}`;
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);
	const language = useAppSelector((state) => state.theme.language);
	const insightsContent =
		language === 'vn' ? pageData.vn.insights : pageData.en.insights;

	return (
		<section id="insights" className={classes} ref={ref}>
			<div className="flex flex-row insights__header">
				<div className="flex flex-column insights__header__left">
					<div className="font-mono uppercase insights__header__left__label">
						<p className="text--muted">{insightsContent.label}</p>
					</div>
					<div className="font-heading  insights__header__left__titles">
						<h1 className="font-heading text--obsidian font-weight-1000" style={{ animationDelay: '0ms' }}>
							{insightsContent.title1}
						</h1>
						<h1 className="font-heading text--obsidian font-weight-1000" style={{ animationDelay: '100ms' }}>
							{insightsContent.title2}
						</h1>
					</div>
				</div>
				<div className="flex flex-row font-heading text--muted insights__header__right">
					<p>{insightsContent.description}</p>
				</div>
			</div>
			<div className="flex insights__content">
				{insightsContent.items.map((item, index) => {
					return (
						<NewsItem
							key={index}
							title={item.title}
							category={item.category}
							readTime={item.readTime}
							complexity={item.complexity}
							summary={item.summary}
							link={item.link}
							style={{ animationDelay: `${index * 200}ms` }}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Insights;
