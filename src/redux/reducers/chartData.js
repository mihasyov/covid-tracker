import { FETCH_CHART_DATA_SUCCESS } from '../actions/types';

export const chartData = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CHART_DATA_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}