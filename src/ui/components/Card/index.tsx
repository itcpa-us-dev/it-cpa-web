import React from 'react';
import StringUtil from '../../../utils/String';

interface CardProps {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
	style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ id, className, children, disabled, style }) => {
	let classes = `card ${className}`;

	if (disabled) {
		classes += ' card--disabled';
	}

	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<div id={id} className={classes} style={style}>
			{children}
		</div>
	);
};

export default Card;
