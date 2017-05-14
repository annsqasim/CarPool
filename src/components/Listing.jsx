import React, { Component } from 'react';
import request from 'superagent';
import { firebaseApp } from '../firebase';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    }
  }
  handleSubscribe = (e) => {
    const driverId = e.target.value;
    const BASE_URL = 'http://192.168.0.104:8080/';
    const user = firebaseApp.auth().currentUser;
    const SUBSCRIBE = `${BASE_URL}passenger/${user.uid}/subscribe/${driverId}`;
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
          if(res.text === 'Already subscribed'){
            alert(res.text);
            // this.setState({ state: "Subscribed Successfully" });
          }
          resolve();
        }
      });
    });
  }

  render() {
    console.log(this.props.driver);
    return (
      <div className="container">
        <div className="row card">
          <div className="col-md-6 info">
            <h2>Name : {this.props.driver.name}</h2>
            <p>No of Customers : {this.props.driver.subscriptions}</p>
            <p>Time 1 : {this.props.driver.pickupTime1}</p>
            <p>Phone: {this.props.driver.phone}</p>
            Locations :
            {
              this.props.driver.locations.map((loc, key)=>{
                return <span key={key} className="btn"><b> {loc}</b> </span>
              })
            }
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
      </div>
    );
  }
}
export default Listing;
