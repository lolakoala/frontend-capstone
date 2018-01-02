import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

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
        {userKeys.length > 2 ? userInfo : null}
        {/* placeholder logo */}
        <img src="http://one-call.ca/wp-content/uploads/2013/08/logo.png" alt="logo" />
        {!pathArray.includes(pathname) ? dashLink : null}
        <RaisedButton label="PANIC" onClick={this.panic} />
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
