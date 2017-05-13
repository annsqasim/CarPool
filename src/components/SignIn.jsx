import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import logo from '../assets/img/cp.png';
// import './css/App.css';

class DriverSignIn extends Component {
  constructor(props) {
  super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
signIn = () => {
  const { email, password } = this.state;
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .catch(error => {
    console.log('error', error);
    this.setState({error});
  })
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
                  <h2 className="panel-title">Sign In</h2>
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
                    <div className="col-md-6 col-sm-8">
                      <button
                        onClick={this.signIn}
                        className='kc-btn'>
                        Sign In
                      </button>
                      <div className="error">{this.state.error.message}</div>
                    </div>
                    <div className="col-md-6 col-sm-8">
                      <div><Link className="kc-btn redirect" to={'/signup'}>Sign Up</Link></div>
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

export default DriverSignIn;
