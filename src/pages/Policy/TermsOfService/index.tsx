import { useAppSelector } from '../../../store';
import { pageData } from '../../../data';
import Icon from '../../../ui/components/Icon';
import '../../Home/Home.scss';
import Button from '../../../ui/components/Button/Button';
import PolicyHeader from '../PolicyHeader';
import PolicyFooter from '../PolicyFooter';
import PolicyContent from '../PolicyContent';

const TermsOfService = () => {
	const language = useAppSelector((state) => state.theme.language);
	const termsAndConditions =
		language === 'vn'
			? pageData.vn.termAndConditions
			: pageData.en.termsAndConditions;
	return (
		<div className="relative policy">
			<Button
				className="button uppercase button--citron button--icon-left policy__back-to-home"
				onClick={() => (window.location.href = '/')}>
				<Icon name="arrow-small-left" size="small" />
				{language === 'vn' ? 'Quay lại trang chủ' : 'Back to Home'}
			</Button>
			<PolicyHeader policyData={termsAndConditions} />
			<PolicyContent language={language} policyData={termsAndConditions} />
			<PolicyFooter />
		</div>
	);
};

export default TermsOfService;
