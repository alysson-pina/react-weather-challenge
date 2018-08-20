import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import CountryDropdown from './components/CountryDropdown';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
          fetchWeather: false,
          country: false,
          state: false
      };
  }

  // onCountryChange(country) {
  //     this.setState({
  //         country: country
  //     });
  // }
  //
  // onStateChange(state) {
  //   this.setState({
  //       state: state
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How's the Weather???</h1>
        </header>
        <div>
          <CountryDropdown />
        </div>

      </div>
    );
  }
}

const mapStateToProps = store => ({
    country: store.countries.country,
    state: store.states.state
});

export default connect(mapStateToProps)(App);
