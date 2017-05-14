import React, { Component } from 'react';
import Header from './Header';
import { firebaseApp } from '../firebase';
import request from 'superagent';
// import './css/App.css';

class ViewPassengerProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      profile:{},
      name:'',
      address:'',
      phoneNo:'',
      time1:'',
      place1:'',
      time2:'',
      place2:'',
      gender:'',

    }
  }
  componentDidMount () {
    const user = firebaseApp.auth().currentUser;
    const GET_USER = `${BASE_URL}user/${user.uid}`;
    this.getUser(GET_USER);
  }
  setGender = () => {
    const op = document.getElementById('gender');
    var gender = op.options[op.selectedIndex].value;
    this.setState({gender});
  }
  getUser (url){
    return new Promise((resolve, reject) => {
      request
      .get(url)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.parse(res.text));
          const data = JSON.parse(res.text);
          this.setState({profile: data.profile});
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
              value={this.state.profile.name}
              onChange={event => this.setState({name: event.target.value})}
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
              value={this.state.profile.address}
              onChange={event => this.setState({address: event.target.value})}
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
              value={this.state.profile.phone}
              onChange={event => this.setState({phoneNo: event.target.value})}
            />
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
              value={this.state.profile.pickupTime1}
              onChange={event => this.setState({time1: event.target.value})}
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
              value={this.state.profile.location1}
              onChange={event => this.setState({place1: event.target.value})}
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
              value={this.state.profile.pickupTime2}
              onChange={event => this.setState({time2: event.target.value})}
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
              value={this.state.profile.location2}
              onChange={event => this.setState({place2: event.target.value})}
            />
          </div>
        </div>
        <select value={this.state.profile.gender} id="gender" style={{width: '20%', float: 'left', padding: '1%'}}className="" onChange={this.setGender}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          style={{marginRight: '5px', marginTop: '5px', width: '20%',float: 'right'}}
          onClick={this.editPassengerProfile}
          className='btn btn-primary'>
          Save
        </button>
        <br />
        <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPassengerProfile;
