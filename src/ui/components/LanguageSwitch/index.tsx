import { type JSX, useState } from 'react';
import Icon from '../Icon';
import './LanguageSwitch.scss';
import { setLanguage } from '../../../store/slice/themeSlice';
import { useAppDispatch } from '../../../store';
import { useAppSelector } from '../../../store';
import { clearCurrentSegment } from '../../../store/slice/displaySlice';
import { pageData } from '../../../data';

type LanguageSwitchProps = {
	id?: string;
	className?: string;
};

const LanguageSwitch = ({
	id,
	className,
}: LanguageSwitchProps): JSX.Element => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const languages = pageData.languages;
	const language = useAppSelector((state) => state.theme.language);

	const dispatch = useAppDispatch();

	const handleChangeLanguage = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const selectedLanguage = event.target.value;
		dispatch(setLanguage(selectedLanguage));
		dispatch(clearCurrentSegment());
		setIsDropdownOpen(false);
	};

	return (
		<div
			className={`font-mono relative language-switch border border--graphite ${className ? className : ''}`}
			title="Switch Language" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
			<Icon className="language-switch__icon" name="globe" size="small" />
			<div className="language-switch__label">
				<span>
					{languages
						.find((lang) => lang.code === language)
						?.code.toLocaleUpperCase()}
				</span>
			</div>
			<div
				className={`flex border border--graphite flex-column absolute language-switch__dropdown ${isDropdownOpen ? 'language-switch__dropdown--shown' : ''}`}>
				{languages.map((lang) => (
					<div
						key={lang.code}
						className={`flex flex-row language-switch__dropdown__item ${language === lang.code ? 'language-switch__dropdown__item--selected' : ''}`}
						onClick={() => {
							handleChangeLanguage({
								target: { value: lang.code },
							} as React.ChangeEvent<HTMLSelectElement>);
						}}>
						<span className={`language-switch__dropdown__item__label`}>
							{
								pageData.languages.find((l) => l.code === lang.code)?.[
									language as keyof typeof lang
								]
							}
						</span>
						{language === lang.code && (
							<Icon
								className="language-switch__dropdown__item__icon"
								name="check"
								size="small"
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default LanguageSwitch;
