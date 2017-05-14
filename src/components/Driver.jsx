import React, { Component } from 'react';
import HeaderDriver from './HeaderDriver';
import request from 'superagent';
import Listing from './Listing';

class Driver extends Component {
  constructor (props) {
    super(props);
    this.state = {
      subscribed: [],
      pendingRequests: [],
      user : {},
    }
  }

  getSubscribedUsers(url) {
    return new Promise((resolve, reject) => {
      request
      .get(url)
      .end((err, res) => {
        if (err) {
          console.log(err);
          reject();
        } else {
          var subscribedUsers = JSON.parse(res.text);
          this.setState({ subscribed: subscribedUsers });
          console.log(this.state.subscribed);
          resolve();
        }
      });
    });
  }

  componentDidMount() {   
  }

  componentWillReceiveProps(nextProps){
    const BASE_URL = 'http://192.168.0.104:8080/';
    const GET_SUBSCRIPTION = `${BASE_URL}driver/${nextProps.user.uid}/subscriptions`;
    this.getSubscribedUsers(GET_SUBSCRIPTION);
    this.setState({user: nextProps.user});
  }
  
  render() {
    return (
      <div className="App">
      	<HeaderDriver />
      	<div className="container">
      		<div className="row">
      			<div className="col-md-6">
      				<h2 className="panel-title">Subscribed Passengers</h2>
      			</div>
      			<div className="col-md-6">
      				<h2 className="panel-title">Pending Requests</h2>
      			</div>
      		</div>
      		<div className="row">
      			{
		            this.state.subscribed.length > 0 ?
		            this.state.subscribed.map((subscriber,key) => {
		              return( <Listing subscriber={subscriber} key={key}/>);
		            }) : <h1>Loading...</h1>
		          }
      		</div>
      	</div>
      </div>
    );
  }
}

export default Driver;
