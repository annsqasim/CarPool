import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
// import './css/App.css';

class KarCoolApp extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="App">
      <button style={{float:'right'}} className='btn btn-danger' onClick={this.signOut}>SignOut</button>
        IN app
      </div>
    );
  }
}

export default KarCoolApp;
