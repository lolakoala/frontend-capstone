import React, { Component } from 'react';
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
  loginSuccess: PropTypes.func
};
