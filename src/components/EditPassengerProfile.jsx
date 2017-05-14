import React, { Component } from 'react';
import Header from './Header';
import request from 'superagent';
// import './css/App.css';

class EditPassengerProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      locations: []
    }
  }
  editPassengerProfile = () => {
    console.log('hello');
  }
  componentDidMount () {
    const BASE_URL = 'http://192.168.0.104:8080/';
    const url =`${BASE_URL}location`;
    this.getLocations(url);
  }
  getLocations(url) {
    return new Promise((resolve, reject) => {
      request
      .get(url)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          const response = JSON.parse(res.text);
          this.setState({locations: response.locations});
          resolve();
        }
      });
    });
  }
  render() {
    return (
      <div className="App">
      <Header />
      <h1 className="panel-title">Edit Profile</h1>
      <div className="container">
      <div className="row">
        <div className="form-group row">
          <label for="example-text-input" className="col-md-2 col-form-label">Name</label>
          <div className="col-md-10">
            <input
              style={{marginRight: '5px', marginTop: '5px'}}
              className='form-control'
              type='text'
              placeholder='name'
              onChange={event => this.setState({email: event.target.value})}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-search-input" className="col-md-2 col-form-label">Address</label>
          <div className="col-md-10">
            <input
              style={{marginRight: '5px', marginTop: '5px'}}
              className='form-control'
              type='text'
              placeholder='address'
              onChange={event => this.setState({password: event.target.value})}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-tel-input" className="col-md-2 col-form-label">Telephone</label>
          <div className="col-md-10">
            <input
              style={{marginRight: '5px', marginTop: '5px'}}
              className='form-control'
              type='text'
              placeholder='phone no'
              onChange={event => this.setState({password: event.target.value})}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-email-input" className="col-md-2 col-form-label">Gender</label>
          <div className="col-md-10">
            <div className="radio">
              <label className="radio-inline"><input type="radio" name="optradio" />Male</label>
              <label className="radio-inline"><input type="radio" name="optradio" />Female</label>
            </div>
          </div>
        </div>
        <h2 className="panel-title">PickUp Location</h2>
        <div className="form-group row">
          <label for="example-url-input" className="col-md-2 col-form-label">Pickup Time</label>
          <div className="col-md-10">
            <input
              style={{marginRight: '5px', marginTop: '5px'}}
              className='form-control'
              type='time'
              onChange={event => this.setState({password: event.target.value})}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-password-input" className="col-md-2 col-form-label">Pickup Location</label>
          <div className="col-md-10">
            <input
              style={{marginRight: '5px', marginTop: '5px'}}
              className='form-control'
              type='text'
              placeholder='place'
              onChange={event => this.setState({password: event.target.value})}
            />
          </div>
        </div>
        <h2 className="panel-title">DropOff Location</h2>
        <div className="form-group row">
          <label for="example-number-input" className="col-md-2 col-form-label">Return Time</label>
          <div className="col-md-10">
            <input
              style={{marginRight: '5px', marginTop: '5px'}}
              className='form-control'
              type='time'
              onChange={event => this.setState({password: event.target.value})}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-datetime-local-input" className="col-md-2 col-form-label">DropOff Place</label>
          <div className="col-md-10">
            <input
              style={{marginRight: '5px', marginTop: '5px'}}
              className='form-control'
              type='text'
              placeholder='place'
              onChange={event => this.setState({password: event.target.value})}
            />
          </div>
        </div>
        <button
          style={{marginRight: '5px', marginTop: '5px'}}
          onClick={this.editPassengerProfile}
          className='btn btn-primary'>
          Save
        </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPassengerProfile;
