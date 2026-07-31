import './Policy.scss';
import LanguageSwitch from '../../ui/components/LanguageSwitch';
type PolicyHeaderProps = {
	policyData: {
		generalCompanyName: string;
		generalTitle: string;
		generalEffectiveDate: string;
	};
};

const PolicyHeader = ({ policyData }: PolicyHeaderProps) => {
	return (
		<section className="policy__hero">
			<h3 className="font-mono text--obsidian">
				{policyData.generalCompanyName}
			</h3>
			<h1 className="font-mono text--obsidian">{policyData.generalTitle}</h1>
			<p className="font-mono text--muted">{policyData.generalEffectiveDate}</p>
			<div className="policy__hero__switch">
				<LanguageSwitch />
			</div>
		</section>
	);
};

export default PolicyHeader;
