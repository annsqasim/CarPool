import React, { Component } from 'react';
import Header from './Header';
// import './css/App.css';

class Passenger extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <div className="container get-the-app-content zoom-out">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 className="sign-in-page-heading">Find Drivers Near Your Route.</h1>
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
    );
  }
}

export default Passenger;
