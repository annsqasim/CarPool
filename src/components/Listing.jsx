import React, { Component } from 'react';

class Listing extends Component {

  render() {
    return (
      <div className="row card">
        <div className="col-md-9 info">
          <h4>Name : {this.props.driver.name}</h4>
          <h4>Phone No : {this.props.driver.phone}</h4>
          <h4>No of Customers : {this.props.driver.subscriptions}</h4>
          <h4>Time 1 : {this.props.driver.pickupTime1}</h4>
          <h4>Time 2 : {this.props.driver.pickupTime2}</h4>
          <h4>Capacity : {this.props.driver.capacity}</h4>
          <h4>Car Name : {this.props.driver.carName}</h4>
          <h4>Time 2 : {this.props.driver.pickupTime2}</h4>
      </div>
      <div className="col-md-3 contact">
        <p className="btn btn-success" style={{marginTop: '20px'}}>Request</p>
      </div>
      </div>
    );
  }
}
export default Listing;
