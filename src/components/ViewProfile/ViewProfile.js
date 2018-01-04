import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, RaisedButton } from 'material-ui';

const ViewProfile = ({ currentUser, userChallenges }) => {
  // pic, username, city, aboutme, challenges

  return (
    <div>
      
    </div>
  );

};

export default ViewProfile;

ViewProfile.propTypes = {
  currentUser: PropTypes.object,
  userChallenges: PropTypes.array
};
