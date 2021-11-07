import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../view/pages/weatherGame/weatherSlice';
import roundReducer from '../view/components/roundHistory/roundSlice';

export default configureStore({
    reducer: {
        weather: weatherReducer,
        round: roundReducer
    }
})