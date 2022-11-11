import { combineReducers, configureStore } from "@reduxjs/toolkit";
import meteoReducer from './sliceWeather'
import dayReducer from './sliceItemCalendar'
import cityReducer from './sliceCity'

export const rootReducer = combineReducers({
  meteoReducer,
  dayReducer,
	cityReducer,
})

export const reducerToolkit = () => configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createAPI.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type ReducerToolkitState = ReturnType<typeof reducerToolkit>
export type AppDispatch = ReducerToolkitState['dispatch']
