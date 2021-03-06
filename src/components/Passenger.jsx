import React, { Component } from 'react';
import Header from './Header';
import request from 'superagent';
import Listing from './Listing';
// import './css/App.css';

class Passenger extends Component {
  constructor (props) {
    super(props);
    this.state = {
      driversList: [],
      costProfile: {},
      user : null,
      cost:'',
      distance:'',
      location1:'',
      location2:'',

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
          this.setState({ driversList: drivers });
          console.log(this.state.driversList);
          resolve();
        }
      });
    });
  }
  componentWillReceiveProps(nextProps){
    const BASE_URL = 'http://192.168.0.104:8080/';
    const GET_COST = `${BASE_URL}passenger/${nextProps.user.uid}/costing`;
    this.getCost(GET_COST);
    this.setState({user: nextProps.user})
  }
  getCost (url) {
    console.log(url);
    return new Promise((resolve, reject) => {
      request
      .get(url)
      .end((err, res) => {
        if (err) {
          console.log(err);
          reject();
        } else {
          var costProfile = JSON.parse(res.text);
          this.setState({ costProfile });
          console.log(this.state.costProfile);
          resolve();
        }
      });
    });
  }
  componentDidMount() {
    const BASE_URL = 'http://192.168.0.104:8080/';
    const GET_DRIVERS = `${BASE_URL}driver`;
    this.getDrivers(GET_DRIVERS);
    if(!!this.state.user) {
      const GET_COST = `${BASE_URL}passenger/${this.state.user.uid}/costing`;
      this.getCost(GET_COST);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="get-the-app-content">
        <Header />
        <div className="container zoom-out">
            <div className="row">
                <div className="col-sm-12 text-center">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                    <div className="fields-section text-center">
                        <div className="btn-group rsvp-options dropdown">
                            <input
                                className='locationSearch'
                                type='text'
                                placeholder='Find Nearby Drivers...'
                                onChange={event => this.setState({location: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        { (!!this.state.costProfile.location1 &&
          !!this.state.costProfile.location2 &&
          !!this.state.costProfile.cost &&
          !!this.state.costProfile.distance) ?
          <div className="row">
            <h3 className="col col-sm-4">Locations <span style={{color: 'green'}}><br />{this.state.costProfile.location1} <br />{this.state.costProfile.location2}</span> </h3>
            <h3 className="col col-sm-4">Estimated Charges <span style={{color: 'green'}}><br />Rs. {Math.round(this.state.costProfile.cost)}</span></h3>
            <h3 className="col col-sm-4">Distance<span style={{color: 'green'}}><br />{Math.round(this.state.costProfile.distance)}km</span></h3>
          </div> : ''
        }
        <div className="row" style={{padding: '3%'}}>
          {
            this.state.driversList.length > 0 ?
            this.state.driversList.map((driver,key) => {
              return( <Listing driver={driver} key={key}/>);
            }) : <h1>Loading...</h1>
          }
        </div>
      </div>
    );
  }
}

export default Passenger;
