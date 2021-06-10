import { FETCH_COUNTRIES_LIST_SUCCESS } from "../actions/types";

export const countriesList = (state = [], action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_LIST_SUCCESS:
            return [...state, ...action.payload]
        default:
            return state;
    }
}