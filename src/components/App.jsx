import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
// import './css/App.css';

class App extends Component {
  componentDidMount() {
    document.title = "KarCool";
  }

  render() {
    return (
      <div className="App">
      <Header />
        <div className="container">
          <div className="row">
            <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="formContainer">
                <div className="panel-heading">
                  <img src="./src/assets/cp.png" alt="Logo" />
                  <div className="panel-title">Sign Up</div>
                </div>
                <div className="panel-body">
                  <div className="col-md-4"><Link className="btn btn-default" to={'/driversignin'}>SignUp</Link></div>
                  <div className="col-md-4"><Link className="btn btn-default" to={'/driversignin'}>I am a Driver</Link></div>
                  <div className="col-md-4"><Link className="btn btn-default" to={'/passengersignin'}>I am a Passenger</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
