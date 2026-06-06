import { useAppSelector } from '../../store';
import './../FirmInfo/FirmInfo.scss';
import data from '../../data';
import LanguageSwitch from '../../ui/components/LanguageSwitch';
import Icon from '../../ui/components/Icon';

const TermsOfService = () => {
	const language = useAppSelector((state) => state.theme.language);
	const termsAndConditions =
		language === 'vn' ? data.vn.termAndConditions : data.en.termsAndConditions;
	const contact = language === 'vn' ? data.vn.firmContact : data.en.firmContact;
	return (
		<div className="firm-info">
			<section className="firm-info__hero">
				<h3>{termsAndConditions.generalCompanyName}</h3>
				<h1>{termsAndConditions.generalTitle}</h1>
				<p>{termsAndConditions.generalEffectiveDate}</p>
				<div className="firm-info__hero__switch">
					<LanguageSwitch />
				</div>
			</section>
			<section className="firm-info__content">
				<div className="firm-info__content__navigation">
					<h4>{language === 'vn' ? 'Nội dung' : 'Contents'}</h4>
					<nav className="firm-info__content__navigation__list">
						<ul>
							{termsAndConditions.contentList.map((item, index) => {
								return (
									<li
										key={`content-item-${index}`}
										className="firm-info__content__navigation__list__item">
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
				<div className="firm-info__content__main">
					{termsAndConditions.content.map((section, index) => {
						return (
							<div
								key={`section-${index}`}
								id={section.id}
								className="firm-info__content__main__item">
								<div className="firm-info__content__main__item__title">
									<h1 className="firm-info__content__main__item__title__number">
										{(index + 1).toString().padStart(2, 'O')}
									</h1>
									<h2 className="firm-info__content__main__item__title__title">
										{section.title}
									</h2>
								</div>
								<p className="firm-info__content__main__item__subtitle">
									{section.subtitle}
								</p>
								{section.contentParagraphs.map((paragraph, pIndex) => {
									return (
										<p
											key={`section-${index}-paragraph-${pIndex}`}
											className="firm-info__content__main__item__paragraph">
											{paragraph}
										</p>
									);
								})}
								{section.contentItems && (
									<ul className="firm-info__content__main__item__list">
										{section.contentItems.map((item, liIndex) => {
											return (
												<li
													key={`section-${index}-list-${liIndex}`}
													className="firm-info__content__main__item__list__item">
													<span>{liIndex + 1}</span>
													<p>{item}</p>
												</li>
											);
										})}
									</ul>
								)}
								<div className="firm-info__content__main__item__additions">
									{section.additions &&
										section.additions.map((addition, aIndex) => {
											return (
												<span
													key={`section-${index}-addition-${aIndex}`}
													className="firm-info__content__main__item__additions__item">
													<p>{addition}</p>
												</span>
											);
										})}
								</div>
								<span
									className="firm-info__content__main__item__back-to-top"
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}>
									<a href="#top"> Back to top</a>
									<Icon name="caret-up" size="small" />
								</span>
							</div>
						);
					})}
				</div>
			</section>
			<section className="firm-info__footer">
				<div className="firm-info__footer__contact">
					<span className="firm-info__footer__contact__item">
						<Icon name="email" size="small" />
						<p>{contact.email}</p>
					</span>
					<span className="firm-info__footer__contact__item">
						<Icon name="phone" size="small" />
						<p>{contact.phone}</p>
					</span>
					<span className="firm-info__footer__contact__item">
						<Icon name="globe" size="small" />
						<p>{contact.website}</p>
					</span>
				</div>
				<div className="firm-info__footer__copyright">
					{`© ${new Date().getFullYear()} IT CPA & Advisory, PLLC. All rights reserved.`}
				</div>
			</section>
			<button
				className="firm-info__back-button"
				onClick={() => (window.location.href = '/')}>
				<Icon name="arrow-left" size="small" />
				<span>{language === 'vn' ? 'Quay Về Trang Chủ' : 'Back to Home'}</span>
			</button>
		</div>
	);
};

export default TermsOfService;
