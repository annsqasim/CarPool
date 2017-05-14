import React, { Component } from 'react';
import HeaderDriver from './HeaderDriver';
import Autocomplete from 'react-autocomplete';
import request from 'superagent';
// import './css/App.css';

class EditDriverProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      locations: [],
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
  setGender = () => {
    const op = document.getElementById('gender');
    var gender = op.options[op.selectedIndex].value;
    this.setState({gender});
  }
  editDriverProfile = () => {
    console.log('hello');
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
            onChange={event => this.setState({name: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='cnic'
            onChange={event => this.setState({cnic: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='address'
            onChange={event => this.setState({address: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='phone no'
            onChange={event => this.setState({phoneNo: event.target.value})}
          />
          <br/>
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Car name'
            onChange={event => this.setState({carName: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='License'
            onChange={event => this.setState({license: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Car model'
            onChange={event => this.setState({carModel: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Capacity'
            onChange={event => this.setState({capacity: event.target.value})}
          />
          <br />
          <select id="gender" className="form-control" onChange={this.setGender}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br/>
          <h2>Locations</h2>
          <br />
          <Autocomplete
            getItemValue={''}
            items={this.state.locations}
            renderItem={''}
          />
          <br />
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

export default EditDriverProfile;
