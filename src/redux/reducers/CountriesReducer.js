import { COUNTRIES } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: false,
    list: [],
    country: false
};

const countriesReducer = (state = INITIAL_STATE, action) => {
    const { type, params, country } = action;

    switch(type) {
        case COUNTRIES.REQUEST:
            return { ...state, loading: true, error: false };
        case COUNTRIES.SUCCESS:
            return { loading: false, error: false, list: params };
        case COUNTRIES.ERROR:
            return { loading: false, error: true, list: [] };
        case COUNTRIES.SELECTED:
            return { ...state, country: country };
        default:
            return state;
    }
};

export default countriesReducer;