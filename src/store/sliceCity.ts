import { createSlice } from "@reduxjs/toolkit";

interface ICity {
	city: string
}

const initialState: ICity = {
	city: 'Moscow',
}

export const sliceCity = createSlice({
  name: 'sliceCity',
	initialState,
	reducers: {
		fetchCityWeather(state, actions) {
			state.city = actions.payload
		}
	}
})

export default sliceCity.reducer
