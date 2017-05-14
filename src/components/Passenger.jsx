import React, { Component } from 'react';
import Header from './Header';
import request from 'superagent';
import Listing from './Listing';
// import './css/App.css';

class Passenger extends Component {
  constructor (props) {
    super(props);
    this.state = {
      driversList: []
    }
  }
  getDrivers(url) {
    return new Promise((resolve, reject) => {
      request
      .get(url)
      .end((err, res) => {
        if (err) {
          console.log(err);
          reject();
        } else {
          var drivers = JSON.parse(res.text);
          console.log(drivers);
          this.setState({ driversList: drivers });
          resolve();          
        }
      });
    });
  }

  componentDidMount() {
    const BASE_URL = 'http://192.168.0.104:8080/';
    const GET_DRIVERS = `${BASE_URL}/driver`;
    this.getDrivers(GET_DRIVERS);
  }

  render() {
    console.log(this.state.driversList);
    return (
      <div className="App">
        <div className="get-the-app-content">
        <Header />
        <div className="container zoom-out">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 className="sign-in-page-heading">Find Nearby Drivers.</h1>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                    <div className="fields-section text-center">
                        <div className="btn-group rsvp-options dropdown">
                            <input
                                className='locationSearch'
                          type='text'
                          placeholder='Location'
                          onChange={event => this.setState({location: event.target.value})}
                            />
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

export default Passenger;
