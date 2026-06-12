/**
 * Cubic Bezier Easing Helper
 * For easing, P0 is (0,0) and P3 is (1,1).
 */
const cubicBezier = (
	progress: number,
	p1x: number = 0,
	p1y: number = 0,
	p2x: number = 1,
	p2y: number = 1,
): number => {
	const cx = 3 * p1x;
	const bx = 3 * (p2x - p1x) - cx;
	const ax = 1 - cx - bx;

	const cy = 3 * p1y;
	const by = 3 * (p2y - p1y) - cy;
	const ay = 1 - cy - by;

	const sampleCurveX = (t: number) => ((ax * t + bx) * t + cx) * t;
	const sampleCurveY = (t: number) => ((ay * t + by) * t + cy) * t;
	const sampleCurveDerivativeX = (t: number) =>
		(3 * ax * t + 2 * bx) * t + cx;

	const solveCurveX = (x: number): number => {
		let t = x;

		// Newton-Raphson iteration
		for (let i = 0; i < 8; i++) {
			const xEstimate = sampleCurveX(t) - x;
			const derivative = sampleCurveDerivativeX(t);

			if (Math.abs(xEstimate) < 1e-6) return t;
			if (Math.abs(derivative) < 1e-6) break;

			t -= xEstimate / derivative;
		}

		// Fallback to bisection
		let t0 = 0;
		let t1 = 1;
		t = x;

		while (t0 < t1) {
			const xEstimate = sampleCurveX(t);

			if (Math.abs(xEstimate - x) < 1e-6) return t;

			if (x > xEstimate) {
				t0 = t;
			} else {
				t1 = t;
			}

			t = (t0 + t1) / 2;
		}

		return t;
	};

	return sampleCurveY(solveCurveX(progress));
};

export const scrollToWithBezier = (
	element: HTMLElement | Window,
	targetY: number,
	duration: number = 500,
	points: [number, number, number, number] = [1, -0.078, 0.419, 1.494],
) => {
	const startY =
		'scrollY' in element ? element.scrollY : element.scrollTop;

	const distance = targetY - startY;
	const startTime = performance.now();

	const step = (currentTime: number) => {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);

		const easedProgress = cubicBezier(progress, ...points);
		const nextY = startY + distance * easedProgress;

		element.scrollTo(0, nextY);

		if (progress < 1) {
			requestAnimationFrame(step);
		}
	};

	requestAnimationFrame(step);
};