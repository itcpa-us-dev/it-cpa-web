import React from 'react';
import './SegmentedCircle.scss';
import StringUtil from '../../../utils/String';
import { useAppSelector } from '../../../store';

interface ArcSegment {
	id: string | number;
	label: string;
	color?: string;
}

interface SegmentedCircleProps {
	centerText: string | '';
	segments: ArcSegment[];
	size?: number; // Total size of the SVG
	gap?: number; // Gap between arcs in degrees
	animate?: boolean; // Whether to apply a rotating animation
	onSelectSegment?: (segment: string | number | null) => void;
}

// Helper to convert polar coordinates to cartesian for SVG pathing
const polarToCartesian = (
	centerX: number,
	centerY: number,
	radius: number,
	angleInDegrees: number,
) => {
	const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	};
};

// Helper to draw an SVG arc path
const describeArc = (
	x: number,
	y: number,
	innerRadius: number,
	outerRadius: number,
	startAngle: number,
	endAngle: number,
) => {
	const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
	const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
	const startInner = polarToCartesian(x, y, innerRadius, endAngle);
	const endInner = polarToCartesian(x, y, innerRadius, startAngle);

	const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

	return [
		'M',
		startOuter.x,
		startOuter.y,
		'A',
		outerRadius,
		outerRadius,
		0,
		largeArcFlag,
		0,
		endOuter.x,
		endOuter.y,
		'L',
		endInner.x,
		endInner.y,
		'A',
		innerRadius,
		innerRadius,
		0,
		largeArcFlag,
		1,
		startInner.x,
		startInner.y,
		'Z',
	].join(' ');
};

export const SegmentedCircle: React.FC<SegmentedCircleProps> = ({
	segments,
	size = 500,
	gap = 3,
	animate = false,
	onSelectSegment,
}) => {
	const currentSegment = useAppSelector(
		(state) => state.display.currentSegment,
	);
	const center = size / 2;
	const outerRadius = size * 0.45;
	const innerRadius = size * 0.25;

	const anglePerSegment = 360 / segments.length;
	let classes = animate ? 'animate-spin' : '';

	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<div
			className="segmented-circle-container"
			style={{ width: size, height: size }}>
			<svg viewBox={`0 0 ${size} ${size}`} className={classes}>
				{/* Render the Arcs */}
				{segments.map((segment, index) => {
					// Calculate start and end angles, applying the gap
					const startAngle = index * anglePerSegment + gap / 2;
					const endAngle = (index + 1) * anglePerSegment - gap / 2;

					const pathData = describeArc(
						center,
						center,
						innerRadius,
						outerRadius,
						startAngle,
						endAngle,
					);

					// Calculate text position at the exact middle of the arc
					const midAngle = startAngle + (endAngle - startAngle) / 2;
					const midRadius = innerRadius + (outerRadius - innerRadius) / 2;
					const textPos = polarToCartesian(center, center, midRadius, midAngle);

					// Rotate text so it follows the curve nicely, flipping it if it's upside down
					let textRotation = midAngle;
					if (midAngle > 90 && midAngle < 270) {
						textRotation -= 180;
					}
					let segmentClasses = `arc-group ${'arc-group--' + index}`;
					segmentClasses += currentSegment === segment.label ? ' active' : '';
					segmentClasses =
						StringUtil.removeDoubleAndTrailingSpace(segmentClasses);

					return (
						<g
							key={segment.id}
							className={segmentClasses}
							onClick={() => onSelectSegment?.(segment.label)}
							style={{ animationDelay: `${index * 100}ms` }}>
							<path d={pathData} className="arc-path" />
							<text
								x={textPos.x}
								y={textPos.y}
								textAnchor="middle"
								dominantBaseline="middle"
								className="arc-text"
								transform={`rotate(${textRotation}, ${textPos.x}, ${textPos.y})`}>
								{segment.label}
							</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
};
