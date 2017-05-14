import React, { Component } from 'react';

class Listing extends Component {

  render() {
    console.log(this.props.driver);
    return (
      <div className="row card">
        <div className="col-md-9 info">
          <a href=""><h4>{this.props.driver.id}</h4></a>
          <p>what are you doing bro.</p>
      </div>
      <div className="col-md-3 contact">
        <p><a href="callTo:03452237077" className="call-to">03452237077</a></p>
      </div>
      </div>
    );
  }
}
export default Listing;
