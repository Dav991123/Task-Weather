import { getRandom } from './randomDatas';
import { lobby } from '../constants/win';

export const createRoundDataModel = (data) => {
    return getRandom(data, lobby.maximumWin).map((item) => ({
        cityName: item,
        isWin: false,
        yourBet: 0,
        roundFinResult: 0
    }));
}

