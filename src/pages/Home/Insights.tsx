import { useAppSelector } from '../../store';
import { pageData } from '../../data';
import './Home.scss';
import NewsItem from '../../ui/components/NewsItem';
import { useReveal } from '../../utils/Reveal';
import { useGoToContact } from '../../utils/Contact';

const Insights = () => {
	const { ref, inView } = useReveal();
	const language = useAppSelector((state) => state.theme.language);
	const insights = (language === 'vn' ? pageData.vn : pageData.en).insights;
	const goToContact = useGoToContact();

	return (
		<section
			id="insights"
			className={`insights ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="insights-title">
			<div className="insights__header">
				<div>
					<p className="eyebrow reveal">{insights.label}</p>
					<h2 id="insights-title" className="section-title insights__title">
						<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
							{insights.title1}
						</span>
						<span
							className="section-title__accent reveal"
							style={{ '--d': '160ms' } as React.CSSProperties}>
							{insights.title2}
						</span>
					</h2>
				</div>
				<p className="section-lead reveal" style={{ '--d': '240ms' } as React.CSSProperties}>
					{insights.description}
				</p>
			</div>
			<div className="insights__grid">
				{insights.items.map((item, index) => (
					<NewsItem
						key={item.id}
						className="reveal"
						title={item.title}
						category={item.category}
						readTime={item.readTime}
						complexity={item.complexity}
						summary={item.summary}
						ctaLabel={insights.askCta}
						onCta={() => goToContact(`${insights.askPrefill}${item.title}`)}
						style={{ '--d': `${240 + index * 80}ms` } as React.CSSProperties}
					/>
				))}
			</div>
		</section>
	);
};

export default Insights;
