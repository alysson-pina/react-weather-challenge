import { COUNTRIES } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: false,
    list: [],
    selectedCountry: false
};

export default (state = INITIAL_STATE, action) => {
    const { type, params } = action;

    switch(type) {
        case COUNTRIES.REQUEST:
            return { ...state, loading: true, error: false };
        case COUNTRIES.SUCCESS:
            return { loading: false, error: false, list: params };
        case COUNTRIES.ERROR:
            return { loading: false, error: true, list: [] };
        default:
            return state;
    }
};