import './ThemeSwitch.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import StringUtil from '../../../utils/String';
import { toggleTheme } from '../../../store/slice/themeSlice';
import Icon from '../Icon';
import type { JSX } from 'react';

type ThemeSwitchProps = {
	id?: string;
	className?: string;
};

const ThemeSwitch = ({ id, className }: ThemeSwitchProps): JSX.Element => {
	const theme = useAppSelector((state) => state.theme.theme);
	const dispatch = useAppDispatch();
	let classes = `theme-switch ${className ? className : ''} ${theme === 'dark' ? 'theme-switch--dark' : 'theme-switch--light'}`;

	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	const handleChangeTheme = () => {
		dispatch(toggleTheme());
	};

	return (
		<div
			className={classes}
			title={`Switch ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}>
			<input
				type="checkbox"
				id={id}
				className="theme-switch__checkbox"
				onChange={handleChangeTheme}
			/>
			<div className="theme-switch__slider">
				<Icon name="sun" size="small" title="Light Mode" />
				<Icon name="moon" size="small" title="Dark Mode" />
			</div>
		</div>
	);
};

export default ThemeSwitch;
