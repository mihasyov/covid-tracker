import { call, put } from "@redux-saga/core/effects"
import { fetchCountryDetails } from "../../api/api"
import { FETCH_COUNTRY_DETAILS_SUCCESS } from "../actions/types"

export function* getCountryDetails(action) {
    try {
        const countryDetails = yield call(fetchCountryDetails, action.country);
        yield put({type: FETCH_COUNTRY_DETAILS_SUCCESS, payload: countryDetails});
    } catch (error) {
        console.log(`getCountryDetails saga ${error}`);
    }
}