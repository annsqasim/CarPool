import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import logoWhite from '../assets/img/cp-white.png';
// import './css/App.css';

class HeaderDriver extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src={logoWhite} width="30" alt="logoWhite"/></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><Link to={'/editdriverprofile'}>My Account</Link></li>
                <li><Link to={'/driver'}>Home</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><button onClick={this.signOut}>SignOut</button></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderDriver;
