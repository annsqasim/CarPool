import React, { Component } from 'react';
import HeaderDriver from './HeaderDriver';
// import './css/App.css';

class Driver extends Component {
  render() {
    return (
      <div className="App">
      <HeaderDriver />
      <h1>Current Passeneger</h1>
      </div>
    );
  }
}

export default Driver;
