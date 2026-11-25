import './ThemeSwitch.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import StringUtil from '../../../utils/String';
import { toggleTheme } from '../../../store/slice/themeSlice';
import Icon from '../Icon';
import type { JSX } from 'react';
import { pageData } from '../../../data';

type ThemeSwitchProps = {
	id?: string;
	className?: string;
};

const ThemeSwitch = ({ id, className }: ThemeSwitchProps): JSX.Element => {
	const theme = useAppSelector((state) => state.theme.theme);
	const language = useAppSelector((state) => state.theme.language);
	const label = (language === 'vn' ? pageData.vn : pageData.en).stickyCta.switchTheme;
	const dispatch = useAppDispatch();
	let classes = `border border--graphite theme-switch ${className ? className : ''} ${theme === 'dark' ? 'theme-switch--dark' : 'theme-switch--light'}`;

	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<div className={classes} title={label}>
			<input
				type="checkbox"
				role="switch"
				id={id}
				aria-label={label}
				checked={theme === 'dark'}
				className="theme-switch__checkbox"
				onChange={() => dispatch(toggleTheme())}
			/>
			<div className="theme-switch__slider" aria-hidden="true">
				<Icon name="sun" size="small" />
				<Icon name="moon" size="small" />
			</div>
		</div>
	);
};

export default ThemeSwitch;
