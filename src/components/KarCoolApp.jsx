import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import Header from './Header';
// import './css/App.css';

class KarCoolApp extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        IN app
      </div>
    );
  }
}

export default KarCoolApp;
