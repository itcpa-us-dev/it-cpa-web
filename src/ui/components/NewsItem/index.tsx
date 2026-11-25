import Icon from '../Icon';
import './NewsItem.scss';

type NewsItemProps = {
	title: string;
	category: string;
	readTime: string;
	complexity: string | number;
	summary: string;
	ctaLabel: string;
	onCta: () => void;
	className?: string;
	style?: React.CSSProperties;
};

/**
 * Topic card for the Insights section. The full articles aren't published yet,
 * so instead of a dead link the card offers to start a conversation about the topic.
 */
const NewsItem = ({
	title,
	category,
	readTime,
	complexity,
	summary,
	ctaLabel,
	onCta,
	className,
	style,
}: NewsItemProps) => {
	return (
		<article className={`flex flex-column news-item ${className ?? ''}`} style={style}>
			<div className="flex flex-wrap items-center font-mono news-item__meta">
				<span className="uppercase text--citron news-item__meta__category">{category}</span>
				<span className="flex items-center news-item__meta__detail">
					<Icon name="clock" size="small" />
					<span>{readTime}</span>
				</span>
				<span className="flex items-center capitalize news-item__meta__detail">
					<Icon name="chart-histogram" size="small" />
					<span>{complexity}</span>
				</span>
			</div>
			<h3 className="font-heading news-item__title">{title}</h3>
			<p className="font-heading news-item__summary">{summary}</p>
			<button type="button" className="flex items-center font-mono uppercase news-item__cta" onClick={onCta}>
				<span>{ctaLabel}</span>
				<Icon name="arrow-small-right" size="small" className="background--citron" />
			</button>
		</article>
	);
};

export default NewsItem;
