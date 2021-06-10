import { combineReducers } from 'redux';
import { countriesList } from './countriesList';
import { countryDetails } from './countryDetails';
import { chartData } from './chartData';

export default combineReducers({
    countriesList,
    countryDetails,
    chartData
})