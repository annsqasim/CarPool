import React, { Component } from 'react';
import HeaderDriver from './HeaderDriver';
// import './css/App.css';

class EditDriverProfile extends Component {

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
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='cnic'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='address'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='phone no'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Car name'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='License'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Car model'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Capacity'
            onChange={event => this.setState({password: event.target.value})}
          />
          <br />
          <div class="radio">
            <h3>Gender</h3>
            <label className="radio-inline"><input type="radio" name="optradio" />Male</label>
            <label className="radio-inline"><input type="radio" name="optradio" />Female</label>
          </div>
          <br/>
          <h2>PickUp Location</h2>
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='time'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='place'
            onChange={event => this.setState({password: event.target.value})}
          />
          <h2>DropOff Location</h2>
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='time'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='place'
            onChange={event => this.setState({password: event.target.value})}
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
