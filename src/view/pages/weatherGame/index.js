import React, { useEffect } from 'react';
import BetSection from '../../components/betSection';
import RoundHistory from '../../components/roundHistory';
import RoundResult from '../../components/roundResult';
import { useDispatch, useSelector } from 'react-redux';
import { cities } from '../../../core/constants/city';
import { createRoundDataModel } from '../../../core/helpers/createRoundDataModel';
import { setRoundData } from '../../components/roundHistory/roundSlice';


const WeatherGame = () => {  
    const { roundFinish } = useSelector(state => state.round);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRoundData(createRoundDataModel(cities)))
    }, []);

    return (
    
        <div>
            { roundFinish ? <RoundResult /> : <BetSection /> }
            <RoundHistory />
        </div>
    )
};

export default WeatherGame;