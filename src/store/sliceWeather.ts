import { createSlice } from '@reduxjs/toolkit'

interface IWeather {
	postItem: Array<object>,
	isLoading: boolean,
	error: string,
}

const initialState: IWeather = {
	postItem: [],
	isLoading: false,
	error: '',
}

export const sliceWeather = createSlice({
	name: 'sliceWeather',
	initialState,
	reducers: {
		todoFetch(state) {
			state.isLoading = true
		},
		todoFetchSuccess(state, actions) {
			state.isLoading = false
			state.error = ''
			state.postItem = actions.payload
		},
		todoFetchError(state) {
			state.isLoading = false
			state.error = 'ГГ ложись спать уже'
			state.postItem = []
		},
	}
})

export default sliceWeather.reducer
