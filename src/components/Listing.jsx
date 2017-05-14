import React, { Component } from 'react';
import request from 'superagent';
import { firebaseApp } from '../firebase';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      subsID:'',
    }
  }
  handleSubscribe = (e) => {
    const driverId = e.target.value;
    const BASE_URL = 'http://192.168.0.104:8080/';
    const user = firebaseApp.auth().currentUser;
    const SUBSCRIBE = `${BASE_URL}passenger/${user.uid}/subscribe/${driverId}`;
    this.applySubscription(SUBSCRIBE);
  }
  handleApprove = (e) => {
    const ApproveId = this.props.subscriber.id;
    const BASE_URL = 'http://192.168.0.104:8080/';
    const user = firebaseApp.auth().currentUser;
    const SUBSCRIBE = `${BASE_URL}driver/${user.uid}/accept/${ApproveId}`;
    this.applySubscription(SUBSCRIBE);
  }

  applySubscription =(url) => {
    return new Promise((resolve, reject) => {
      request
      .post(url)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
          if(res.text === 'done'){
            const status = document.getElementById('status');
            status.innerHTML = 'Subscribed Successfully';
            // this.setState({ state: "Subscribed Successfully" });
          }
          resolve();
        }
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row card">
        {
          this.props.driver ?
          <div>
          <div className="col-md-6 info">
            <h2>Name : {this.props.driver.name}</h2>
            <p>No of Customers : {this.props.driver.subscriptions}</p>
            <p>Time 1 : {this.props.driver.pickupTime1}</p>
            <p>Phone: {this.props.driver.phone}</p>
          </div>
          <div className="col-md-3 contact-info">
            <h4>Capacity : {this.props.driver.capacity}</h4>
            <h4>Car Name : {this.props.driver.carName}</h4>
            <h4>Time 2 : {this.props.driver.pickupTime2}</h4>
          </div>
          <div className="col-md-3 contact">
            <button
              className="kc-btn "
              style={{marginTop: '20px'}}
              onClick={this.handleSubscribe}
              value={this.props.driver.id}
            >Subscibe
            </button>
            <small id="status"></small>
          </div>
          </div>
          :
          <div className="col-md-6">
            <h4>Name : {this.props.subscriber.passenger.name}</h4>
            <button
              style={{marginRight: '5px', marginTop: '5px', width: '20%',float: 'right'}}
              onClick={this.handleApprove}
              className='kc-btn'>
              Approve
            </button>
          </div>
        }
        </div>
      </div>
    );
  }
}
export default Listing;
