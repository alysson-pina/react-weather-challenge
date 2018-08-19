import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStates } from '../redux/actions/state-action';
import { store } from "../redux/store";

class MyDropdown extends Component {

    countryComponentSelected(country) {
        const { fetchStates } = this.props;

        fetchStates(country);
    }

    render() {

        const { state: { loading, error, list, selectedCountry } } = this.props;

        if(error){
            return <div>Sorry, something wrong happened.</div>;
        }

        if(loading){
            return <div>Loading...</div>;
        }

        if(!selectedCountry){
            return <div>Please selected your country</div>;
        }

        return(
            <select>
                <option value="">Select a State</option>
                {
                    list.map( state => (
                        <option value={state.abbr}>{state.name}</option>
                    ))
                }
            </select>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state.state
});

const mapDispatchToProps = (dispatch) => ({
    fetchStates: (country) => dispatch(fetchStates(country))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDropdown);