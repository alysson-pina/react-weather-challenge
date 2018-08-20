import Axios from 'axios';
import { COUNTRIES } from './types';

export const fetchCountries = () => (dispatch) => {
    dispatch({type: COUNTRIES.REQUEST});

    Axios.get('http://services.groupkt.com/country/get/all')
        .then( (response) => {
            const list = response.data.RestResponse.result;
            dispatch({type: COUNTRIES.SUCCESS, params: list});
        } )
        .catch(() => {
            dispatch({type: COUNTRIES.ERROR});
        }
    );
};

export const countrySelected = (country) => (dispatch) => {
    console.log(country);
    dispatch({
        type: COUNTRIES.SELECTED,
        country: country
    });
};

// export const countrySelected = (country) => ({
//         type: COUNTRIES.SELECTED,
//         country: country
// });