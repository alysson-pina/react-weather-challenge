import Axios from 'axios';
import { STATES } from './types';

export const fetchStates = (states) => (dispatch) => {

    dispatch({type: STATES.REQUEST});

    Axios.get(`http://services.groupkt.com/state/get/USA/all`)
    .then( (response) => {
        const list = response.data.RestResponse.result;
        dispatch({type: STATES.SUCCESS, params: list});
    } )
    .catch(() => {
            dispatch({type: STATES.ERROR});
        }
    );
};

export const stateSelected = state => ({
    type: STATES.SELECTED,
    stateDropdown: state
});