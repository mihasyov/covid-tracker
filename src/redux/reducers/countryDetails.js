import { FETCH_COUNTRY_DETAILS_SUCCESS } from "../actions/types";

export const countryDetails = (state = {}, action) => {
    switch (action.type) {
        case FETCH_COUNTRY_DETAILS_SUCCESS:
            return { ...state, ...action.payload}
        default:
            return state;
    }
}