import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';


// logo
// panic button

// if user has completed profile (keys > 2)
// username
// user photo

// if not on Dash, CreateProfile, LandingPage, or SelectCity
// dash button

// if not on LandingPage
// signout

const Persisted = ({ currentUser }) => {
  const userInfo = <div>
    <Avatar src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg" />
    <h3>{currentUser.userName}</h3>
  </div>;

  return (
    <div>
      
    </div>
  );
};

export default Persisted;

Persisted.propTypes = {
  currentUser: PropTypes.object
};
