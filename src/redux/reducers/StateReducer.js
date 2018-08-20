import { STATES } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: false,
    list: [],
    country: false
};

const stateReducer = (state = INITIAL_STATE, action) => {
    const { type, params, stateDropdown } = action;

    switch(type) {
        case STATES.REQUEST:
            return { ...state, loading: true, error: false };
        case STATES.SUCCESS:
            return { loading: false, error: false, list: params };
        case STATES.ERROR:
            return { loading: false, error: true, list: [] };
        case STATES.SELECTED:
            return { ...state, state: stateDropdown };
        default:
            return state;
    }
};

export default stateReducer;