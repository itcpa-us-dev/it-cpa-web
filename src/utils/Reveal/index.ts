import { useInView } from 'react-intersection-observer';

/**
 * Reveal-on-scroll for a section. Returns a ref for the section and whether it
 * has come into view. It fires as soon as the section's top passes 85% of the
 * screen height, so very tall sections (services, FAQ) don't stay hidden until
 * the visitor has scrolled deep into them. Pair with the `.reveal` CSS class.
 */
export const useReveal = () =>
	useInView({
		triggerOnce: true,
		threshold: 0,
		rootMargin: '0px 0px -15% 0px',
	});
