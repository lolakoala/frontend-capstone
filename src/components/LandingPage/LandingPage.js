import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { auth, provider } from '../../firebase.js';

class LandingPage extends Component {

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const userEmail = result.user.email;
        this.props.loginSuccess(userEmail);
      });
  }

  render() {
    const { currentUser } = this.props;
    const userKeys = Object.keys(currentUser);
    //if currentUser has one key, redirect to edit profile
    if (userKeys.length === 1) {
      return <Redirect to="/selectCity" />;
    }
    //if currentUser has > 1 key, redirect to dash
    if (userKeys.length > 1) {
      return <Redirect to="/dash" />;
    }

    return (
      <div>
        <h1>Mental Health App</h1>
        <p>Explanation of the app.</p>
        <RaisedButton label="Sign Up" onClick={this.login} />
        <RaisedButton label="Log In" onClick={this.login} />
      </div>
    );
  }
}

export default LandingPage;

LandingPage.propTypes = {
  loginSuccess: PropTypes.func,
  currentUser: PropTypes.object
};
