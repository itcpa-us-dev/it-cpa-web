export default class WindowUtils {
	isMobile(): boolean {
		return window.innerWidth <= 768;
	}

	isTablet(): boolean {
		return window.innerWidth > 768 && window.innerWidth <= 1024;
	}

	isDesktop(): boolean {
		return window.innerWidth > 1024;
	}

	isLandscape(): boolean {
		return window.innerWidth > window.innerHeight;
	}

	isPortrait(): boolean {
		return window.innerHeight > window.innerWidth;
	}

	isRetina(): boolean {
		return window.devicePixelRatio > 1;
	}

	isTouchDevice(): boolean {
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	}
}
