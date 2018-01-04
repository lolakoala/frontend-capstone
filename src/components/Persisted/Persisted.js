import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, RaisedButton } from 'material-ui';
import css from './Persisted.css';
import logo from '../../assets/logo1.png';

class Persisted extends Component {
  panic = () => {
    // use twilio API to text the mental health hotline
  };

  render () {
    const { currentUser, signOut } = this.props;
    const { pathname } = this.props.location;
    const userKeys = Object.keys(currentUser);

    const renderUser = () => {
      if (userKeys.length > 2 && (!pathname.includes('profile') || !pathname.includes('Profile'))) {
        return userInfo;
      }
    };

    const userInfo = <div id="current-user">
      {/* placeholder avatar, should fetch from server?  */}
      <Avatar src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg" alt="Your user photo"/>
      <h3>{currentUser.userName}</h3>
    </div>;

    const signOutButton = <RaisedButton
      label="Sign Out"
      onClick={signOut}
      linkButton={true}
      href="/"
      style={{
        position: 'fixed',
        top: '70px',
        right: '25%'
      }}
    />;

    const dashLink = <RaisedButton
      label="Home"
      id="home-button"
      linkButton={true}
      href="/dash"
      style={{
        position: 'fixed',
        top: '120px',
        right: '25%'
      }}
    />;

    const pathArray = ['/dash', '/', '/createProfile', '/selectCity'];

    return (
      <div>
        <RaisedButton
          label="PANIC"
          onClick={this.panic}
          id="panic-button"
          style={{
            position: 'fixed',
            top: '20px',
            right: '25%'
          }}
        />
        {renderUser()}
        <img src={logo} alt="logo" id="logo"/>
        {pathname !== '/' ? signOutButton : null}
        {!pathArray.includes(pathname) ? dashLink : null}
      </div>
    );
  }
}

export default Persisted;

Persisted.propTypes = {
  currentUser: PropTypes.object,
  location: PropTypes.object,
  signOut: PropTypes.func
};
