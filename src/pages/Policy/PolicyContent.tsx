import Button from '../../ui/components/Button/Button';
import Icon from '../../ui/components/Icon';

type ContentListItem = {
	href: string;
	label: string;
};

type ContentParagraphSection = {
	id: string;
	title: string;
	subtitle: string;
	contentParagraphs: string[];
	contentItems?: string[];
	additions?: string[];
};

type PolicyData = {
	contentList: ContentListItem[];
	content: ContentParagraphSection[];
};

type PolicyContentProps = {
	language: string;
	policyData: PolicyData;
};

const PolicyContent = ({ language, policyData }: PolicyContentProps) => {
	return (
		<section className="flex relative policy__content">
			<div className="policy__content__navigation">
				<h4 className="font-mono text--obsidian">
					{language === 'vn' ? 'Nội dung' : 'Contents'}
				</h4>
				<nav className="font-mono policy__content__navigation__list">
					<ul>
						{policyData.contentList.map((item, index) => {
							return (
								<li
									key={`content-item-${index}`}
									className="flex text--muted policy__content__navigation__list__item">
									<span>{(index + 1).toString().padStart(2, 'O')}</span>
									<span>
										<a href={`${item.href}`}>{item.label}</a>
									</span>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
			<div className="flex flex-column policy__content__main">
				{policyData.content.map((section, index) => {
					return (
						<div
							key={`section-${index}`}
							id={section.id}
							className="flex flex-column policy__content__main__item">
							<div className="flex items-center policy__content__main__item__title">
								<h1 className="text--muted policy__content__main__item__title__number">
									{(index + 1).toString().padStart(2, 'O')}
								</h1>
								<h2 className="text--muted font-mono policy__content__main__item__title__title">
									{section.title}
								</h2>
							</div>
							<p className="font-mono policy__content__main__item__subtitle">
								{section.subtitle}
							</p>
							{section.contentParagraphs.map((paragraph, pIndex) => {
								return (
									<p
										key={`section-${index}-paragraph-${pIndex}`}
										className="flex flex-column font-heading policy__content__main__item__paragraph">
										{paragraph}
									</p>
								);
							})}
							{section.contentItems && (
								<ul className="flex flex-column policy__content__main__item__list">
									{section.contentItems.map((item, liIndex) => {
										return (
											<li
												key={`section-${index}-list-${liIndex}`}
												className="flex font-heading policy__content__main__item__list__item">
												<span>{liIndex + 1}</span>
												<p>{item}</p>
											</li>
										);
									})}
								</ul>
							)}
							<div className="policy__content__main__item__additions">
								{section.additions &&
									section.additions.map((addition, aIndex) => {
										return (
											<span
												key={`section-${index}-addition-${aIndex}`}
												className="font-heading policy__content__main__item__additions__item">
												<p>{addition}</p>
											</span>
										);
									})}
							</div>
							<Button
								className="button button--icon-right button--hollow policy__content__main__item__back-to-top"
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
								<a href="#top">
									{' '}
									{language === 'vn' ? 'Lên đầu trang' : 'Back to top'}
								</a>
								<Icon name="caret-up" size="small" />
							</Button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default PolicyContent;
