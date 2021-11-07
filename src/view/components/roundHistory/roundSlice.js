import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roundStep: 0,
    roundData: [],
    roundHistory: [],
    correctAnswer: 0,
    roundFinish: false
}

const roundSlice = createSlice({
    name: 'round',
    initialState,
    reducers: {
        changeStepRound: (state) => {
            state.roundStep += 1;
        },
        resetRoundStep: (state) => {
            state.roundStep = 0
        },
        setRoundData: (state, { payload }) => {
            state.roundData = payload
        },
        setBet: (state, { payload }) => {
            state.bet = payload;
        },
        incrementCorrectAnswer: (state) => {
            state.correctAnswer += 1;
        },
        resetCorrectAnswer: (state) => {
            state.correctAnswer = 0;
        },
        setRoundFinish: (state, { payload }) => {
            state.roundFinish = payload;
        },
        setRoundHistort: (state, { payload }) => {
            state.roundHistory.push(payload)
        },
        playNowRound: () => initialState

    }
})

export const { changeStepRound, setRoundData, setRoundHistort, resetRoundStep, setRoundFinish,incrementCorrectAnswer, playNowRound } = roundSlice.actions;
export default roundSlice.reducer;