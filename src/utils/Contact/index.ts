import { useCallback } from 'react';
import { useAppDispatch } from '../../store';
import { setContactPrefill } from '../../store/slice/displaySlice';
import { scrollTo } from '../Scroll';

/**
 * Returns a function that scrolls to the contact form. Pass text to have it
 * placed in the message box, e.g. "I'm interested in: Payroll".
 */
export const useGoToContact = () => {
	const dispatch = useAppDispatch();
	return useCallback(
		(prefill?: string) => {
			if (prefill) dispatch(setContactPrefill(prefill));
			scrollTo('#contact');
		},
		[dispatch],
	);
};
