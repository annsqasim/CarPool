import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './components/App';
import PassengerSignIn from './components/PassengerSignIn';
import PassengerSignUp from './components/PassengerSignUp';
import DriverSignIn from './components/DriverSignIn';
import DriverSignUp from './components/DriverSignUp';
import KarCoolApp from './components/KarCoolApp';
import './index.css';
import { firebaseApp } from './firebase';

const browserHistory = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user =>{
  if (user) {
    console.log(user.uid);
    browserHistory.push('/karkoolapp');
  } else {
    browserHistory.replace('/app');
  }
})

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <div>
      <Route path="/app" component={App} />
      <Route path="/driversignin" component={DriverSignIn} />
      <Route path="/driversignup" component={DriverSignUp} />
      <Route path="/passengersignin" component={PassengerSignIn} />
      <Route path="/passengersignup" component={PassengerSignUp} />
      <Route path="/karkoolapp" component={KarCoolApp} />
    </div>
  </Router>,
  document.getElementById('root')
);
