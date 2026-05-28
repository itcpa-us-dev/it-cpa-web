import StringUtil from '../../../utils/String';
import './Icon.scss';

type IconProps = {
	size: 'small' | 'medium' | 'large';
	name: string;
	onClick?: (e: React.MouseEvent) => void;
	innerRef?: React.RefObject<HTMLElement>;
	title?: string;
	id?: string;
	ariaDetails?: string;
	className?: string;
};

const Icon = ({
	size,
	name,
	onClick,
	innerRef,
	title,
	id,
	ariaDetails,
	className,
}: IconProps) => {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (onClick) onClick(e);
	};
	let classes = `icon ${size ? 'icon--' + size : ''} ${
		name ? 'icon--' + name : ''
	} ${className ? className : ''}`;

	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<i
			id={id}
			className={classes}
			onClick={(e) => handleClick(e)}
			ref={innerRef}
			title={title}
			aria-details={ariaDetails}
		/>
	);
};

export default Icon;
