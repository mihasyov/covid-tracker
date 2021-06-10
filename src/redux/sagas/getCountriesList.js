import { call, put } from "@redux-saga/core/effects"
import { FETCH_COUNTRIES_LIST_SUCCESS } from "../actions/types";
import { fetchCountriesList } from '../../api/api';

export function* getCountriesList() {
    try {
      const countries = yield call(fetchCountriesList);
      yield put({type: FETCH_COUNTRIES_LIST_SUCCESS, payload: countries}); 
    } catch (error) {
        console.log(`getCountriesList saga ${error}`);
    }
}