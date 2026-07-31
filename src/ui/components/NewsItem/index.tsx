import { NavLink } from 'react-router-dom';
import StringUtil from '../../../utils/String';
import Icon from '../Icon';
import './NewsItem.scss';

type NewsItemProps = {
	title: string;
	category: string;
	readTime: string;
	complexity: string | number;
	summary: string;
	link: string;
	style?: React.CSSProperties;
};

const NewsItem = ({
	title,
	category,
	readTime,
	complexity,
	summary,
	link,
	style,
}: NewsItemProps) => {
	let classes = 'flex news-item';
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<div className={classes} style={style}>
			<NavLink className="flex flex-column" to={link}>
				<div className="flex capitalize items-center gap-8 news-item__header">
					<h4 className="font-mono text--citron font-weight-400 uppercase news-item__header__category">
						{category}
					</h4>
					<div className="flex font-mono news-item__header__time">
						<Icon name="clock" size="small" />
						<span className="text--obsidian">{readTime}</span>
					</div>
					<div className="flex font-mono news-item__header__complexity">
						<Icon name="chart-histogram" size="small" />
						<span className="text--obsidian">{complexity}</span>
					</div>
					<Icon
						className="news-item__header__indicator"
						name="arrow-small-right"
						size="medium"
					/>
				</div>
				<div className="text--obsidian news-item__content">
					<h3 className="font-heading news-item__content__title">{title}</h3>
					<p className="font-heading news-item__content__summary">{summary}</p>
				</div>
			</NavLink>
		</div>
	);
};

export default NewsItem;
