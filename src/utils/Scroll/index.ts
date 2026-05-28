/**
 * Simple Cubic Bezier Easing Helper
 * Formula based on (1-t)^3*P0 + 3(1-t)^2*t*P1 + 3(1-t)*t^2*P2 + t^3*P3
 * For easing, P0 is (0,0) and P3 is (1,1).
 */
const cubicBezier = (
	t: number,
	p1x: number,
	p1y: number,
	p2x: number,
	p2y: number,
): number => {
	const cx = 3 * p1x;
	const bx = 3 * (p2x - p1x) - cx;
	const ax = 1 - cx - bx;

	const cy = 3 * p1y;
	const by = 3 * (p2y - p1y) - cy;
	const ay = 1 - cy - by;

	const sampleCurveX = (t: number) => ((ax * t + bx) * t + cx) * t;
	const sampleCurveY = (t: number) => ((ay * t + by) * t + cy) * t;

	// Use Newton's method to solve for t given an x (time progress)
	// For simplicity in a basic scroll, we can approximate with direct progress:
	return sampleCurveY(t);
};

export const scrollToWithBezier = (
	element: HTMLElement | Window,
	targetY: number,
	duration: number = 500,
	points: [number, number, number, number] = [1, -0.078, 0.419, 1.494], // "Custom Ease"
) => {
	const startY =
		'scrollY' in element ? element.scrollY : (element as HTMLElement).scrollTop;
	const distance = targetY - startY;
	const startTime = performance.now();

	const step = (currentTime: number) => {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);

		// Calculate eased progress
		const easedProgress = cubicBezier(progress, ...points);
		const nextY = startY + distance * easedProgress;

		element.scrollTo(0, nextY);

		if (progress < 1) {
			requestAnimationFrame(step);
		}
	};

	requestAnimationFrame(step);
};
