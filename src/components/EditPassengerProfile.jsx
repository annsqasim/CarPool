import React, { Component } from 'react';
import Header from './Header';
import { firebaseApp } from '../firebase';
import request from 'superagent';
// import './css/App.css';

class EditPassengerProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      profile:{},
      locations: [],
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
  editPassengerProfile = () => {
    const user = firebaseApp.auth().currentUser;
    const BASE_URL = 'http://192.168.0.104:8080/';
    const SET_PAS_PRO = `${BASE_URL}passenger/${user.uid}`;
    this.setPassengerProfile(SET_PAS_PRO);
    alert('Profile Updated');
  }
  setPassengerProfile(url) {
    return new Promise((resolve, reject) => {
      request
      .put(url)
      .send({name: this.state.name,
        gender: this.state.gender,
        address: this.state.address,
        phone: this.state.phoneNo,
        pickupTime1: this.state.time1,
        pickupTime2: this.state.time2,
        location1: this.state.place1,
        location2: this.state.place2})
      .end((err, res) => {
        if (err) {
          console.log(err);
          reject();
        } else {
          console.log(res);
          resolve();
        }
      });
    });
  }
  componentDidMount () {
    const BASE_URL = 'http://192.168.0.104:8080/';
    const GET_LOCATION =`${BASE_URL}location`;
    this.getLocations(GET_LOCATION);
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
          this.setState({
            name: data.profile.name,
            gender: data.profile.gender,
            address: data.profile.address,
            phoneNo: data.profile.phone,
            time1: data.profile.pickupTime1,
            time2: data.profile.pickupTime2,
            place1: data.profile.location1,
            place2: data.profile.location2});
          resolve();
        }
      });
    });
  }
  setPlace1 = (e) => {
    const op = document.getElementById('place1');
    var place1 = op.options[op.selectedIndex].value;
    this.setState({place1});
    console.log(this.state.place1);
  }
  setPlace2 = (e) => {
    const op = document.getElementById('place2');
    var place2 = op.options[op.selectedIndex].value;
    this.setState({place2});
    console.log(this.state.place1);
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
              value={this.state.name}
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
              value={this.state.address}
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
              value={this.state.phoneNo}
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
              value={this.state.time1}
              onChange={event => this.setState({time1: event.target.value})}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-password-input" className="col-md-2 col-form-label">Pickup Location</label>
          <div className="col-md-10">
          <select value={this.state.place1} style={{width: '40%',float: 'left', padding: '1%'}} id="place1"  onChange={this.setPlace1}>
            <option value="">Pickup place</option>
            {
              this.state.locations.map((location,key)=>{
                 return <option key={key} value={location.name}>{location.name}</option>
              })
            }
          </select>
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
              value={this.state.time2}
              onChange={event => this.setState({time2: event.target.value})}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-datetime-local-input" className="col-md-2 col-form-label">DropOff Place</label>
          <div className="col-md-10">
          <select value={this.state.place2} style={{width: '40%',float: 'left', padding: '1%'}} id="place2"  onChange={this.setPlace2}>
            <option value="">Pickup place</option>
            {
              this.state.locations.map((location, key)=>{
                 return <option key={key} value={location.name}>{location.name}</option>
              })
            }
          </select>
          </div>
        </div>
        <select value={this.state.gender} id="gender" style={{width: '20%', float: 'left', padding: '1%'}} className="" onChange={this.setGender}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          style={{marginRight: '5px', marginTop: '5px', width: '20%',float: 'right'}}
          onClick={this.editPassengerProfile}
          className='btn btn-success'>
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

export default EditPassengerProfile;
