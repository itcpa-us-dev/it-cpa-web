import { type JSX, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import './LanguageSwitch.scss';
import { setLanguage } from '../../../store/slice/themeSlice';
import { useAppDispatch, useAppSelector } from '../../../store';
import { clearCurrentSegment } from '../../../store/slice/displaySlice';
import { pageData } from '../../../data';

type LanguageSwitchProps = {
	id?: string;
	className?: string;
};

const LanguageSwitch = ({ id, className }: LanguageSwitchProps): JSX.Element => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const languages = pageData.languages;
	const language = useAppSelector((state) => state.theme.language);
	const label = (language === 'vn' ? pageData.vn : pageData.en).stickyCta.switchLanguage;
	const wrapperRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	// Close on outside click or Escape
	useEffect(() => {
		if (!isDropdownOpen) return;
		const onPointer = (e: MouseEvent) => {
			if (!wrapperRef.current?.contains(e.target as Node)) setIsDropdownOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsDropdownOpen(false);
		};
		document.addEventListener('mousedown', onPointer);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onPointer);
			document.removeEventListener('keydown', onKey);
		};
	}, [isDropdownOpen]);

	const choose = (code: string) => {
		dispatch(setLanguage(code));
		dispatch(clearCurrentSegment());
		setIsDropdownOpen(false);
	};

	return (
		<div ref={wrapperRef} className={`relative ${className ? className : ''}`}>
			<button
				type="button"
				id={id}
				className="font-mono language-switch border border--graphite"
				title={label}
				aria-label={label}
				aria-haspopup="listbox"
				aria-expanded={isDropdownOpen}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<Icon className="language-switch__icon" name="globe" size="small" />
				<span className="language-switch__label">
					{languages.find((lang) => lang.code === language)?.code.toLocaleUpperCase()}
				</span>
			</button>
			<ul
				role="listbox"
				aria-label={label}
				className={`flex border border--graphite flex-column absolute font-mono language-switch__dropdown ${isDropdownOpen ? 'language-switch__dropdown--shown' : ''}`}>
				{languages.map((lang) => (
					<li key={lang.code} role="none">
						<button
							type="button"
							role="option"
							aria-selected={language === lang.code}
							className={`flex flex-row language-switch__dropdown__item ${language === lang.code ? 'language-switch__dropdown__item--selected' : ''}`}
							onClick={() => choose(lang.code)}>
							<span className="language-switch__dropdown__item__label">
								{lang.label}
							</span>
							{language === lang.code && (
								<Icon
									className="language-switch__dropdown__item__icon"
									name="check"
									size="small"
								/>
							)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LanguageSwitch;
