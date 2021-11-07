import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';


const RoundResult = () => {
    const { roundHistory } = useSelector(state => state.round);

    return (
        <div className="round_history_container">
            {
                roundHistory.map(({cityName, isWin, yourBet, roundFinResult}) => {
                    return (
                        <div key={`${cityName}_${yourBet}`}>
                            <h2>{cityName}</h2>
                            <p style={{color: isWin === true ? 'green' : 'red'}}>Your bet : {yourBet}</p>
                            <p>round fin result {roundFinResult}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default RoundResult