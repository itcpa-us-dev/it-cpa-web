import { useAppSelector } from '../../../store';
import { pageData } from '../../../data';
import Icon from '../../../ui/components/Icon';
import '../../Home/Home.scss';
import './../Policy.scss';
import PolicyHeader from '../PolicyHeader';
import PolicyFooter from '../PolicyFooter';
import PolicyContent from '../PolicyContent';
import Button from '../../../ui/components/Button/Button';

const PrivacyPolicy = () => {
	const language = useAppSelector((state) => state.theme.language);
	const policyData =
		language === 'vn' ? pageData.vn.privacyPolicy : pageData.en.privacyPolicy;
	return (
		<div className="relative policy">
			<Button
				className="button uppercase button--citron button--icon-left policy__back-to-home"
				onClick={() => (window.location.href = '/')}>
				<Icon name="arrow-small-left" size="small" />
				{language === 'vn' ? 'Quay lại trang chủ' : 'Back to Home'}
			</Button>
			<PolicyHeader policyData={policyData} />
			<PolicyContent language={language} policyData={policyData} />
			<PolicyFooter />
		</div>
	);
};

export default PrivacyPolicy;
