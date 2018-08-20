import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collection, CollectionItem } from 'react-materialize';

import Axios from 'axios';

class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: false
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedState !== this.props.selectedState){
            this.fetchWeather(this.props.selectedCountry, this.props.selectedState);
        }
    }

    fetchWeather(country,state) {

        Axios.get(`https://samples.openweathermap.org/data/2.5/forecast?q=${state},${country}&appid=b6907d289e10d714a6e88b30761fae22`)
        .then( (response) => {
            const { temp, temp_max, temp_min, humidity } = response.data.list[0].main;
            const { main, description } = response.data.list[0].weather[0];

            this.setState({
                loading: false,
                error: false,
                forecastReady: true,
                temp: temp,
                temp_max: temp_max,
                temp_min: temp_min,
                humidity: humidity,
                main: main,
                description: description
            });
        } )
        .catch( (e) => {
            console.log("exception happened while fetching weather info", e);
        } );
    }

    render() {

        if(this.state.error){
            return <div>Sorry, something wrong happened.</div>;
        }

        if(this.state.loading){
            return <div>Loading...</div>;
        }

        if(!this.props.selectedCountry){
            return <div>Please select a Country</div>;
        }

        if(!this.props.selectedState){
            return <div>Please select a State</div>;
        }

        return(
            <Collection header="Weather Forecast">
                <CollectionItem href='#'>{this.state.main} - {this.state.description}</CollectionItem>
                <CollectionItem href='#' active>Temperature (F): {this.state.temp}</CollectionItem>
                <CollectionItem href='#'>Max Temperature(F): {this.state.temp_max} </CollectionItem>
                <CollectionItem href='#'>Min Temperature(F): {this.state.temp_min}</CollectionItem>
                <CollectionItem href='#'>Min Temperature(F): {this.state.temp_min}</CollectionItem>
                <CollectionItem href='#'>Humidity Temperature: {this.state.humidity}</CollectionItem>
            </Collection>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state.state
});

const mapDispatchToProps = dispatch => {
    return {}
};

// export default connect(mapStateToProps, mapDispatchToProps)(Weather);
export default Weather;