import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, RaisedButton } from 'material-ui';

// if not on Dash, CreateProfile, LandingPage, or SelectCity
// dash button

// if not on LandingPage
// signout

class Persisted extends Component {
  render () {

    console.log(this.props.location.pathname);
    const userKeys = Object.keys(this.props.currentUser);

    const userInfo = <div>
      <Avatar src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg" alt="Your user photo"/>
      <h3>{this.props.currentUser.userName}</h3>
    </div>;

    const panic = () => {
      // use twilio API to text the mental health hotline
    };

    return (
      <div>
        {userKeys.length > 2 ? userInfo : null}
        <img src="http://one-call.ca/wp-content/uploads/2013/08/logo.png" alt="logo" />
        <RaisedButton label="PANIC" onClick={() => panic()} />
      </div>
    );
  }
}

export default Persisted;

Persisted.propTypes = {
  currentUser: PropTypes.object,
  location: PropTypes.object
};
