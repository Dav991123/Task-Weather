import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpClient } from '../../../core/apiService/httpClient';

const END_POINTS = {
    prefix: 'weather'
}

export const getWeatherBySityName = createAsyncThunk('get/weather', async (payload, { dispatch, getState }) => {
    return httpClient.get(END_POINTS.prefix, payload).then(res => res.json())
})

const weatherSlice = createSlice({
    name: END_POINTS.prefix,
    initialState: {
        data: {},
        status: null
    },

    extraReducers: {
        [getWeatherBySityName.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getWeatherBySityName.fulfilled]: (state, {payload}) => {
            state.data = payload;
            state.status = 'success'
        },
        [getWeatherBySityName.rejected]: (state, action) => {
            state.status = 'faild'
        }
    }
})

export default weatherSlice.reducer;