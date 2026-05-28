import { type JSX } from 'react';
import Icon from '../Icon';
import './LanguageSwitch.scss';
import { setLanguage } from '../../../store/slice/themeSlice';
import { useAppDispatch } from '../../../store';
import { useAppSelector } from '../../../store';
import { clearCurrentSegment } from '../../../store/slice/displaySlice';
type LanguageSwitchProps = {
	id?: string;
	className?: string;
};

const LanguageSwitch = ({ id, className }: LanguageSwitchProps): JSX.Element => {
	const language = useAppSelector((state) => state.theme.language);

	const dispatch = useAppDispatch();

	const handleChangeLanguage = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const selectedLanguage = event.target.value;
		dispatch(setLanguage(selectedLanguage));
		dispatch(clearCurrentSegment());
	};

	return (
		<div className={`language-switch ${className ? className : ''}`} title="Switch Language">
			<Icon className="language-switch__icon" name="globe" size="small" />
			<select
				id={id}
				className="language-switch__select"
				value={language}
				onChange={handleChangeLanguage}>
				<option value="en">
					{language === 'en' ? 'English' : 'Tiếng Anh'}
				</option>
				<option value="vn">
					{language === 'vn' ? 'Tiếng Việt' : 'Vietnamese'}
				</option>
			</select>
		</div>
	);
};

export default LanguageSwitch;
