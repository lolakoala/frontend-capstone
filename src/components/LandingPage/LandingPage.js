import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { auth, provider } from '../../firebase.js';
import css from './LandingPage.css';

class LandingPage extends Component {

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        // might need result.user.uid for some kind of authentication?
        const userEmail = result.user.email;
        this.props.loginSuccess(userEmail);
      });
  }

  render() {
    const currentUser = this.props.currentUser;

    if (currentUser.email && !currentUser.userName) {
      return <Redirect to="/selectCity" />;
    }
    if (currentUser.userName) {
      return <Redirect to="/dash" />;
    }

    return (
      <div className='welcome'>
        <p>Search for mental health professionals and connect with mental health buddies in your area!</p>
        <RaisedButton
          label="Sign Up"
          onClick={this.login}
          buttonStyle={{
            height: '100px',
            width: '250px'
          }}
          style={{
            marginBottom: '50px'
          }}
          labelStyle={{
            fontSize: '30px',
            marginTop: '30px'
          }}
        />
        <RaisedButton
          label="Log In"
          onClick={this.login}
          buttonStyle={{
            height: '100px',
            width: '250px'
          }}
          style={{
            marginBottom: '50px'
          }}
          labelStyle={{
            fontSize: '30px',
            marginTop: '30px'
          }}
        />
      </div>
    );
  }
}

export default LandingPage;

LandingPage.propTypes = {
  loginSuccess: PropTypes.func,
  currentUser: PropTypes.object
};
