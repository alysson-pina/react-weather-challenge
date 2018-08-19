import { STATES } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: false,
    list: []
};

export default (state = INITIAL_STATE, action) => {
    const { type, params } = action;

    switch(type) {
        case STATES.REQUEST:
            return { ...state, loading: true, error: false };
        case STATES.SUCCESS:
            return { loading: false, error: false, list: params };
        case STATES.ERROR:
            return { loading: false, error: true, list: [] };
        default:
            return state;
    }
};