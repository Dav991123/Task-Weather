import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lobby } from '../../../core/constants/win';
import { playNowRound } from '../roundHistory/roundSlice';
import { setRoundData } from '../roundHistory/roundSlice';
import { createRoundDataModel } from '../../../core/helpers/createRoundDataModel';
import { cities } from '../../../core/constants/city';

const RoundResult = () => {
    const dispatch = useDispatch();
    const { correctAnswer, roundData } = useSelector(state => state.round);
    const roundLength = roundData.length;
    const isWen = correctAnswer >= lobby.correctWnswer;

    const handleStartNewRound = () => {
        dispatch(playNowRound());
        dispatch(setRoundData(createRoundDataModel(cities)))
    };


    return (
        <div>
            <h2>Your Results </h2>
            <p>{roundLength} / <b>{correctAnswer}</b></p>
            <p style={{color: isWen ? 'green': 'red'}}>{isWen ? 'You Win' : 'You lost'}</p>
            <button onClick={handleStartNewRound}>Play Now</button>
        </div>
    )
};

export default RoundResult;