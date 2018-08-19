import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCountries, countryGotSelected } from '../redux/actions/countries-action';
import { fetchStates } from '../redux/actions/state-action';
import { store } from '../redux/store';

class MyDropdown extends Component {

    componentDidMount() {
        const { fetchCountries } = this.props;

        fetchCountries();
    }

    handleChange(event) {
        countryGotSelected(`${event.target.value}`);
        fetchStates(`${event.target.value}`);
    }

    render() {
        const { countries: { loading, error, selectedCountry, list } } = this.props;

        if(error){
            return <div>Sorry, something wrong happened.</div>;
        }

        if(loading){
            return <div>Loading...</div>;
        }

        return(
            <select onChange={(event) => {this.handleChange(event);}} value={selectedCountry}>
                <option value="">Select a Country</option>
                { list.map( country => (
                    <option value={country.alpha3_code}>{country.name}</option>
                ) ) }
            </select>
        );
    }
}

const mapStateToProps = (state) => ({
    countries: state.countries,
    selectedCountry: state.selectedCountry
});

const mapDispatchToProps = (dispatch) =>({
    fetchCountries: () => dispatch(fetchCountries()),
    fetchStates: () => dispatch(fetchStates())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDropdown);