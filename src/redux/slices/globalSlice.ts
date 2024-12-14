import { createSlice } from '@reduxjs/toolkit'

interface IGlobalInitialState {
	navSection: number
}
const initialState: IGlobalInitialState = {
	navSection: 1,
}

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setNavSection(state, action) {
			state.navSection = action.payload
		},
	},
})

export const { setNavSection } = globalSlice.actions

export default globalSlice.reducer
