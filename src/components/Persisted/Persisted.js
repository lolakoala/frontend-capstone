import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
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

    const userInfo = <div>
      {/* placeholder avatar, should fetch from server?  */}
      <Avatar src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg" alt="Your user photo"/>
      <h3>{currentUser.userName}</h3>
    </div>;

    const signOutButton = <RaisedButton label="Sign Out" onClick={signOut} />;

    const dashLink = <Link to='/dash'>Home</Link>;

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
        {userKeys.length > 2 ? userInfo : null}
        {/* placeholder logo */}
        <img src={logo} alt="logo" />
        {!pathArray.includes(pathname) ? dashLink : null}
        {pathname !== '/' ? signOutButton : null}
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
