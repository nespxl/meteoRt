import axios from "axios";
import { AppDispatch } from "../store";
import { sliceWeather } from "../store/sliceWeather";

const firstDay = new Date().getDate()
const firstMonth = new Date().getMonth() + 1
const lastMonth = new Date().getMonth() + 2
const firstYear = new Date().getFullYear()
let filterDay = ''

if (firstDay < 10) {
	filterDay = '0' + firstDay // форматируем под данные число(строку)
} else filterDay = String(firstDay)

const firstFullDate = firstYear + '-' + firstMonth + '-' + filterDay
const lastFullDate = firstYear + '-' + lastMonth + '-' + filterDay

export const API = (city: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(sliceWeather.actions.todoFetch())
		const response = await axios.get('https://meteostat.p.rapidapi.com/stations/hourly', {
			params: { station: '10637', start: firstFullDate, end: lastFullDate, tz: `Europe/${city}` },
			headers: {
				'X-RapidAPI-Key': 'cdab068fccmsh9343a886205e59dp17c8b9jsn28b052b533b8',
				'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
			}
		})
		dispatch(sliceWeather.actions.todoFetchSuccess(response.data.data))
	} catch (error) {
		dispatch(sliceWeather.actions.todoFetchError())
	}
}
