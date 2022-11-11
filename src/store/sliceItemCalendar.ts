import { createSlice } from "@reduxjs/toolkit"

interface IDay {
    item: number
}

const initialState: IDay = {
    item: new Date().getDate()
}

export const sliceItemCalendar = createSlice({
    name: 'sliceItemCalendar',
    initialState,
    reducers: {
        dayClick(state, actions) {
            state.item = actions.payload
        }
    }
})

export default sliceItemCalendar.reducer
