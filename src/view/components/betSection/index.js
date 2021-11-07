import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { weatherDoBet } from '../../pages/weatherGame/weatherSlice';
import { STATUS_TYPES } from '../../../core/constants/redux';

const BetSection = () => {
    const dispatch = useDispatch();
    const [ inputValue, setInputValue ] = useState(0);
    const { roundStep, roundData } = useSelector(state => state.round);
    const { status } = useSelector(state => state.weather);

    const handleChangeInput = e => {
        const { value } = e.target;
        setInputValue(value);
    };
    
    const roundDataInfo = useMemo(() => {
        return roundData[roundStep] || {}
    }, [roundStep, roundData]);
        
    const doBet = () => {
        dispatch(weatherDoBet({
            q: roundDataInfo.cityName,
            bet: inputValue
        }));

        setInputValue('')
    };

    return (
        <div>
            <h2>City: {roundDataInfo.cityName}</h2>
            <input 
                type="number"
                value={inputValue}
                onChange={handleChangeInput}
            />

            <button
                onClick={doBet}
                disabled={!inputValue}
            >
                {status === STATUS_TYPES.LOADING ? 'loading...' : 'Bet'}
            </button>
        </div>
    )
};

export default BetSection;