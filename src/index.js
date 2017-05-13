import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import KarCoolApp from './components/KarCoolApp';
import EditPassengerProfile from './components/EditPassengerProfile';
import './index.css';
import { firebaseApp } from './firebase';

const browserHistory = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user =>{
  if (user) {
    console.log(user.uid);
    browserHistory.push('/karkoolapp');
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
      <Route path="/karkoolapp" component={KarCoolApp} />
      <Route path="/editpassengerprofile" component={EditPassengerProfile} />

    </div>
  </Router>,
  document.getElementById('root')
);
