import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCountries, countrySelected } from '../redux/actions/countries-action';
import StateDropdown from './StateDropdown';


class CountryDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
           selectedCountry: ''
        };
    }

    componentDidMount() {
        const { fetchCountries } = this.props;

        fetchCountries();
    }

    handleChange(event) {
        this.setState({
            selectedCountry: `${event.target.value}`
        });
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
            <div className="container">
                <select onChange={(event) => {this.handleChange(event);}} value={selectedCountry}>
                    <option value="">Select a Country</option>
                    { list.map( country => (
                        <option value={country.alpha3_code}>{country.name}</option>
                    ) ) }
                </select>
                <StateDropdown selectedCountry={this.state.selectedCountry}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    countries: state.countries
});

const mapDispatchToProps = (dispatch) =>({
    fetchCountries: () => dispatch(fetchCountries()),
    countrySelected: () => dispatch(countrySelected())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropdown);