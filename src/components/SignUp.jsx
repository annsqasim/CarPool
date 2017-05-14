import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import logo from '../assets/img/cp.png';
import request from 'superagent';
// import './css/App.css';

class DriverSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      },
      userType: '',
    }
  }

  addUser(url) {
    return new Promise((resolve, reject) => {
      request
      .post(url)
      .end((err, res) => {
        if (err) {
          console.log(err);
          reject();
        } else {
          console.log(res);
          alert('Your account has been created now you can sign in');
          resolve();
        }
      });
    });
  }

  signUp = () => {
    if (this.state.userType && this.state.email && this.state.password) {
      const { email, password } = this.state;
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        const BASE_URL = 'http://192.168.0.104:8080/';
        const ADD_USER = `${BASE_URL}${this.state.userType}/${user.uid}`;
        console.log(ADD_USER);
        this.addUser(ADD_USER);
      })
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
    } else {
      alert('Please input all fields');
    }
  }
  setUserType = (e) => {
    const op = document.getElementById('userType');
    var userType = op.options[op.selectedIndex].value;
    this.setState({userType});
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="formContainer">
              <div className='form-horizontal' style={{margin: '5%'}}>
                <div className="logo">
                  <img src={logo} alt="Logo" width="100" />
                </div>
                <h2 className="panel-title">Sign Up</h2>
                <div className='form-group'>
                  <input
                    style={{marginRight: '5px', marginTop: '5px'}}
                    className='form-control'
                    type='text'
                    placeholder='email'
                    onChange={event => this.setState({email: event.target.value})}
                  />
                  <input
                    style={{marginRight: '5px', marginTop: '5px'}}
                    className='form-control'
                    type='password'
                    placeholder='password'
                    onChange={event => this.setState({password: event.target.value})}
                  />
                  <select id="userType" className="form-control" onChange={this.setUserType}>
                    <option value="">Join as a</option>
                    <option value="passenger">Passenger</option>
                    <option value="driver">Driver</option>
                  </select>
                  <div className="col-md-6 col-sm-8">
                    <button
                      onClick={this.signUp}
                      className='kc-btn'>
                      Sign Up
                    </button>
                    <div className="error">{this.state.error.message}</div>
                  </div>
                  <div className="col-md-6 col-sm-8">
                    <div><Link className="kc-btn redirect" to={'/signin'}>Sign In</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DriverSignUp;
