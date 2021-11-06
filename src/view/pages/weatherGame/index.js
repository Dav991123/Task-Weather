import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherBySityName } from './weatherSlice';

const WeatherGame = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.weather)
    
    console.log({
        data, status
    }, 'state');


    useEffect(() => {
        dispatch(getWeatherBySityName({
            q: 'Yerevan'
          }))
    }, []);
    
    return (
    
        <div>
        </div>
    )
};

export default WeatherGame;