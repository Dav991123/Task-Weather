import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpClient } from '../../../core/apiService/httpClient';
import { 
    setRoundData, 
    setRoundFinish,
    changeStepRound, 
    setRoundHistort,
    incrementCorrectAnswer,
 } from '../../components/roundHistory/roundSlice';
 import { lobby } from '../../../core/constants/win';
import { STATUS_TYPES } from '../../../core/constants/redux';

const END_POINTS = {
    prefix: 'weather'
}

const betWinCheck = (roundBetResult, bet) => Math.abs(roundBetResult - bet) >= lobby.maximumWin;

const bettingRoundProcess = (getState, dispatch, options) => {
    const { round: { roundData, roundStep } } = getState();
    const { roundBetResult, bet } = options;
    const isWin = !betWinCheck(roundBetResult, bet);
    const isFinish = roundData.length === roundStep + 1;
    const betResults = [...roundData];
    const roundDataModel = {
        ...betResults[roundStep],
        isWin,
        yourBet: bet,
        roundFinResult: roundBetResult
    }

    betResults.splice(roundStep, 1, roundDataModel);

    dispatch(setRoundHistort(roundDataModel))

    isFinish && dispatch(setRoundFinish(true))
    isWin && dispatch(incrementCorrectAnswer());
    dispatch(setRoundData(betResults));
    dispatch(changeStepRound());
};

export const weatherDoBet = createAsyncThunk('get/weather', async (payload, { dispatch, getState }) => {
    const { round: { roundData, roundStep } } = getState();
    const { q, bet } = payload
  
    if (roundData.length !== roundStep) {
        const { name, main: { temp } } = await httpClient.get(END_POINTS.prefix, { q });

        const options = {
            bet: bet,
            roundBetResult: Math.floor(temp),
        };

        bettingRoundProcess(getState, dispatch, options)
    
        return {
            name, 
            temp: Math.floor(temp)
        }
    } 
})

const weatherSlice = createSlice({
    name: END_POINTS.prefix,
    initialState: {
        data: {},
        status: null
    },

    extraReducers: {
        [weatherDoBet.pending]: (state) => {
            state.status = STATUS_TYPES.LOADING
        },
        [weatherDoBet.fulfilled]: (state, {payload}) => {
            state.data = payload;
            state.status = STATUS_TYPES.SUCCESS
        },
        [weatherDoBet.rejected]: (state) => {
            state.status = STATUS_TYPES.FAILD
        }
    }
})

export default weatherSlice.reducer;