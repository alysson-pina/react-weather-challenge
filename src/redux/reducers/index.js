import CountriesReducer from './CountriesReducer';
import StateReducer from './StateReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    countries: CountriesReducer,
    states: StateReducer
});

export default reducers;