// Portal.tsx
import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store';

export interface PortalProps {
	children: React.ReactNode;
	/** CSS selector for the target. Defaults to '#portal-root'. */
	selector?: string;
	/** Direct container if you don't want to use a selector. */
	container?: HTMLElement | null;
}

const canUseDOM =
	typeof window !== 'undefined' && !!window.document?.createElement;

export default function Portal({
	children,
	selector = '#portal-root',
	container,
}: PortalProps) {
	const theme = useAppSelector((state) => state.theme.theme);
	const [portalEl] = useState<HTMLDivElement | null>(() => {
		if (!canUseDOM) return null;
		const newDiv = document.createElement('div');
		newDiv.setAttribute('data-theme', theme);
		return newDiv;
	});

	useEffect(() => {
		if (!portalEl) return;

		const target =
			container ??
			(selector
				? document.querySelector<HTMLElement>(selector)
				: document.body);

		if (!target) {
			throw new Error(`Portal target not found for selector: ${selector}`);
		}

		target.appendChild(portalEl);

		return () => {
			portalEl.remove();
		};
	}, [portalEl, selector, container]);

	if (!portalEl) return null;

	return createPortal(children, portalEl);
}
