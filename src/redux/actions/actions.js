import * as types from './types';

export const fetchCountriesList = () => ({
    type: types.FETCH_COUNTRIES_LIST
});

export const fetchCountryDetails = (country) => ({
    type: types.FETCH_COUNTRY_DETAILS,
    country
});

export const fetchChartData = (casesType) => ({
    type: types.FETCH_CHART_DATA,
    casesType
});