import React, { type JSX } from 'react';
import './Button.scss';

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	id?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
	className,
	id,
	children,
	type = 'button',
	onClick,
	style,
}: ButtonProps): JSX.Element => {
	let classes = 'flex flex-row button';
	if (className) classes += ` ${className}`;

	return (
		<button type={type} className={classes} id={id} onClick={onClick} style={style}>
			{children}
		</button>
	);
};

export default Button;
