import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import Button from '../../ui/components/Button/Button';
import Icon from '../../ui/components/Icon';
import '../Home/Home.scss';
import './Policy.scss';

const PolicyFooter = () => {
	const language = useAppSelector((state) => state.theme.language);
	const contact =
		language === 'vn' ? pageData.vn.firmContact : pageData.en.firmContact;
	return (
		<section className="flex flex-column gap-10 font-mono items-center justify-center policy__footer">
			<div className="flex items-center policy__footer__contact">
				{contact.map((method, index) => {
					return (
						<span
							key={`contact-method-${index}`}
							className="flex text--obsidian policy__footer__contact__item">
							<Icon name={method.icon} size="small" />
							<p>{method.value}</p>
						</span>
					);
				})}
			</div>
			<div className="flex text--obsidian policy__footer__copyright">
				{`© ${new Date().getFullYear()} IT CPA & Advisory, PLLC. All rights reserved.`}
			</div>
		</section>
	);
};

export default PolicyFooter;
