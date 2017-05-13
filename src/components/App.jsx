import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Link className="btn btn-primary" to={'/driversignin'}>Driver</Link></div>
        <div><Link className="btn btn-success" to={'/passengersignin'}>Passenger</Link></div>
      </div>
    );
  }
}

export default App;
