import React, { Component } from 'react';
import HeaderDriver from './HeaderDriver';
import request from 'superagent';
import { firebaseApp } from '../firebase';
// import './css/App.css';

class EditDriverProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      locations: [],
      driverLocation: [],
      name: '',
      cnic:'',
      address:'',
      phoneno:'',
      carName:'',
      license:'',
      carModel:'',
      capacity:'',
      gender:'',
    };
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
  addLoc = () => {
    const newLoc = document.getElementById('location');
    const newLocations = this.state.driverLocation;
    const loc = newLoc.options[newLoc.selectedIndex].value;
    newLocations.push(loc);
    this.setState({ driverLocation: newLocations });
    console.log(this.state.driverLocation);
  }
  setPlace = () => {
    const op = document.getElementById('location');
    const location = op.options[op.selectedIndex].value;
    let valueExist = '';
    valueExist = this.state.driverLocation.filter((loc)=>{
      return location === loc;
    })
    console.log(valueExist.length);
    if(valueExist.length > 0){
      alert('Already Added');
    } else {
      const newLocations = this.state.driverLocation;
      newLocations.push(location);
      this.setState({ driverLocation: newLocations });
      console.log(this.state.driverLocation);
    }
  }
  setGender = () => {
    const op = document.getElementById('gender');
    var gender = op.options[op.selectedIndex].value;
    this.setState({gender});
  }
  deleteLocation = (e) => {
    const driverLocation = this.state.driverLocation.filter((loc)=>{
      return loc !== e;
    })
    this.setState({driverLocation});
    console.log(this.state.driverLocation);
  }
  editDriverProfile = () => {
    const user = firebaseApp.auth().currentUser;
    const BASE_URL = 'http://192.168.0.104:8080/';
    const SET_PAS_PRO = `${BASE_URL}driver/${user.uid}`;
    this.setDriverProfile(SET_PAS_PRO);
    alert('Changes saved');
  }
  componentDidMount () {
    const driver = firebaseApp.auth().currentUser;
    const MY_BASE_URL = 'http://192.168.0.104:8080/';
    const GET_DRIVER = `${MY_BASE_URL}driver/${driver.uid}`;
    this.getDriver(GET_DRIVER);
    const BASE_URL = 'http://192.168.0.104:8080/';
    const url =`${BASE_URL}location`;
    this.getLocations(url);
  }
  getDriver =(url)=>{
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
            name: data.name,
            cnic: data.cnic,
            gender: data.gender,
            address: data.address,
            phone: data.phone,
            carName: data.carName,
            license: data.license,
            driverLocation: data.locations,
            capacity: +data.capacity,
            carModel: data.carModel});
          console.log(this.state)
          resolve();
        }
      });
    });
  }
  setDriverProfile(url) {
    return new Promise((resolve, reject) => {
      request
      .put(url)
      .send({name: this.state.name,
        cnic: this.state.cnic,
        gender: this.state.gender,
        address: this.state.address,
        phone: this.state.phone,
        carName: this.state.carName,
        license: this.state.license,
        locations: this.state.driverLocation,
        capacity: +this.state.capacity,
        carModel: this.state.carModel})
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

  render() {
    return (
      <div className="App">
      <HeaderDriver />
      <div className='form-inline' style={{margin: '5%'}}>
        <h1 className="panel-title">Edit Profile</h1>
        <div className='form-group'>
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='cnic'
            value={this.state.cnic}
            onChange={event => this.setState({cnic: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='address'
            value={this.state.address}
            onChange={event => this.setState({address: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='phone no'
            value={this.state.phoneno}
            onChange={event => this.setState({phoneNo: event.target.value})}
          />
          <br/>
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Car name'
            value={this.state.carName}
            onChange={event => this.setState({carName: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='License'
            value={this.state.license}
            onChange={event => this.setState({license: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Car model'
            value={this.state.carModel}
            onChange={event => this.setState({carModel: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Capacity'
            value={this.state.capacity}
            onChange={event => this.setState({capacity: event.target.value})}
          />
          <br />
          <select id="gender" value={this.state.gender} className="form-control" onChange={this.setGender}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br/>
          <h2>Locations</h2>
          <br />
          <select id="location"  style={{width: '40%',float: 'left', padding: '1%'}}  onChange={this.setPlace}>
            <option value="">Pickup place</option>
            {
              this.state.locations.map((location, key)=>{
                 return <option key={key} value={location.name}>{location.name}</option>
              })
            }
          </select>
          <button
            style={{marginRight: '5px', marginTop: '5px'}}
            onClick={this.addLoc}
            className='btn'>
            Add
          </button>
          <br />
          <br />
          {
            this.state.driverLocation.map((loc, key) => {
              return(
                <span key={key} style={{padding: '2%'}} className="row" >
                  {loc}&nbsp;&nbsp;&nbsp;
                  <span onClick={() => this.deleteLocation(loc)} className="btn btn-danger">X</span>
                </span>
              )
            })
          }
          <br />
          <button
            style={{marginRight: '5px', marginTop: '5px'}}
            onClick={this.editDriverProfile}
            className='kc-btn'>
            Save
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default EditDriverProfile;
