import { call, put } from "@redux-saga/core/effects";
import { FETCH_CHART_DATA_SUCCESS } from "../actions/types";
import { fetchChartData } from '../../api/api';

export function* getChartData() {
    try {
        const chartData = yield call(fetchChartData);
        yield put({type: FETCH_CHART_DATA_SUCCESS, payload: chartData})
    } catch (error) {
        console.log(`getChartData saga ${error}`);
    }
}