import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../view/pages/weatherGame/weatherSlice';
export default configureStore({
    reducer: {
        weather: weatherReducer
    }
})