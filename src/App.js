import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/index';


import logo from './logo.svg';
import './App.css';

import CountryDropdown from './components/CountryDropdown';
import StateDropdown from './components/StateDropdown';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How's the Weather???</h1>
        </header>
        <div>
          <CountryDropdown />
          <StateDropdown />
        </div>

      </div>
    );
  }
}

export default App;
