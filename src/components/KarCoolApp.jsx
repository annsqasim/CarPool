import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import Header from './Header';
// import './css/App.css';

class KarCoolApp extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }
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
