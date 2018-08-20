import React, { Component } from 'react';
import { connect } from 'react-redux';

import Axios from 'axios';

import Weather from './Weather';

class StateDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: false,
            list: [],
            selectedState: false
        };
    }

    componentDidUpdate(prevProps) {
        if( prevProps.selectedCountry !== this.props.selectedCountry && this.props.selectedCountry ){
            this.fetchStates(this.props.selectedCountry);
        }
    }

    fetchStates(country) {
        Axios.get(`http://services.groupkt.com/state/get/${country}/all`)
        .then( (response) => {
            const list = response.data.RestResponse.result;

            this.setState({
                loading: false,
                error: false,
                list: list
            });
        } )
        .catch( () => {
            console.log("exception happened while fetching states info");
        } );
    }

    updateSelectedState(event) {
        let state = false;

        if( event.target && event.target.value ){
            state = event.target.value;
        }

        this.setState({
            selectedState: state
        });
    }

    render() {

        if(this.state.error){
            return <div>Sorry, something wrong happened.</div>;
        }

        if(this.state.loading){
            return <div>Loading...</div>;
        }

        if(!this.props.selectedCountry){
            return <div>Please selected your country</div>;
        }

        return(
            <div>
                <select onChange={(event) => {this.updateSelectedState(event);}}>
                    <option value="">Select a State</option>
                    {
                        this.state.list.map( state => (
                            <option value={state.abbr}>{state.name}</option>
                        ))
                    }
                </select>
                <Weather selectedCountry={this.props.selectedCountry} selectedState={this.state.selectedState}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state.state
});

const mapDispatchToProps = dispatch => {
    return {}
};

// const mapStateToProps = (store) => ({
//     country: store.countries.country
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     fetchStates: () => dispatch(fetchStates()),
//     stateSelected: () => dispatch(stateSelected())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(StateDropdown);

export default StateDropdown;