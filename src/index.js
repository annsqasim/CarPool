import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Passenger from './components/Passenger';
import Driver from './components/Driver';
import EditPassengerProfile from './components/EditPassengerProfile';
import EditDriverProfile from './components/EditDriverProfile';
import './index.css';
import { firebaseApp } from './firebase';
import request from 'superagent';

const browserHistory = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user =>{
  if (user) {
    const BASE_URL = 'http://192.168.0.104:8080/';
    const SIGN_IN_USER = `${BASE_URL}user/${user.uid}`;
    return new Promise((resolve, reject) => {
      request
      .get(SIGN_IN_USER)
      .end((err, res) => {
        if (err) {
          console.log(err);
          browserHistory.replace('/signin');
        } else {
          const user = JSON.parse(res.text);
          if (user.type === 'passenger') {
            browserHistory.push('/passenger');
          }
          else if (user.type === 'driver') {
            browserHistory.push('/driver');
          }
          resolve();
        }
      });
    });
  } else {
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <div>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/passenger" component={Passenger} />
      <Route path="/driver" component={Driver} />
      <Route path="/editpassengerprofile" component={EditPassengerProfile} />
      <Route path="/editdriverprofile" component={EditDriverProfile} />

    </div>
  </Router>,
  document.getElementById('root')
);
