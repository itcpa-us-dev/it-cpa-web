import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	headbarOpen: false,
	language: localStorage.getItem('language') || 'en',
	currentSegment: null as string | null,
	currentEntity: 'individual' as string | null,
	// Text to drop into the contact form's message box (set by "Ask about this" buttons)
	contactPrefill: null as string | null,
};

const displaySlice = createSlice({
	name: 'display',
	initialState,
	reducers: {
		toggleHeadbar(state) {
			state.headbarOpen = !state.headbarOpen;
			localStorage.setItem('headbarOpen', state.headbarOpen.toString());
		},
		setHeadbarState(state, action) {
			state.headbarOpen = action.payload;
			localStorage.setItem('headbarOpen', state.headbarOpen.toString());
		},
		setCurrentSegment(state, action) {
			if (state.currentSegment === action.payload) {
				state.currentSegment = null; // Deselect if the same segment is clicked
				return;
			}
			state.currentSegment = action.payload;
		},
		clearCurrentSegment(state) {
			state.currentSegment = null;
		},
		setCurrentEntity(state, action) {
			if (state.currentEntity === action.payload) {
				return;
			}
			state.currentEntity = action.payload;
		},
		clearCurrentEntity(state) {
			state.currentEntity = null;
		},
		setContactPrefill(state, action: { payload: string | null }) {
			state.contactPrefill = action.payload;
		},
	},
});

export const {
	toggleHeadbar,
	setCurrentSegment,
	clearCurrentSegment,
	setCurrentEntity,
	clearCurrentEntity,
	setHeadbarState,
	setContactPrefill,
} = displaySlice.actions;
export default displaySlice.reducer;
