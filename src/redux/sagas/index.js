import { takeLatest, all } from 'redux-saga/effects';
import { FETCH_CHART_DATA, FETCH_COUNTRIES_LIST } from '../actions/types';
import { FETCH_COUNTRY_DETAILS } from './../actions/types';
import { getChartData } from './getChartData';
import { getCountriesList } from './getCountriesList';
import { getCountryDetails } from './getCountryDetails';

export default function* rootSaga() {
    try {       
        yield all([
            takeLatest(FETCH_COUNTRIES_LIST, getCountriesList),
            takeLatest(FETCH_COUNTRY_DETAILS, getCountryDetails),
            takeLatest(FETCH_CHART_DATA, getChartData)
        ])
    } catch (error) {
        console.log(`ROOT SAGA ${error}`);
    }
}