import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	headbarOpen: localStorage.getItem('headbarOpen') === 'true',
	language: localStorage.getItem('language') || 'en',
	currentSegment: null as string | null,
	currentEntity: 'individual' as string | null,
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
	},
});

export const {
	toggleHeadbar,
	setCurrentSegment,
	clearCurrentSegment,
	setCurrentEntity,
	clearCurrentEntity,
	setHeadbarState,
} = displaySlice.actions;
export default displaySlice.reducer;
