import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
// import './css/App.css';

class Header extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        <button  className='btn btn-danger' onClick={this.signOut}>SignOut</button>
        <Link className="btn btn-danger" to={'/editpassengerprofile'}>My Account</Link>
        <Link className="btn btn-danger" to={'/karkoolapp'}>Home</Link>
      </div>
    );
  }
}

export default Header;
