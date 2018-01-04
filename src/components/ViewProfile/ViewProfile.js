import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../assets/snail-shell.svg';
import { List,
  ListItem,
  Subheader
} from 'material-ui';

const ViewProfile = ({ currentUser, userChallenges }) => {
  
  const mapChallenges = userChallenges.map((challenge, index) => {
    return <ListItem
      primaryText={challenge}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
      key={`${challenge}${index}`}
    />;
  });


  return (
    <div>
      <img
        // placeholder img url
        src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg"
        alt="Your avatar"
      />
      <h3>{currentUser.userName}</h3>
      <h4>{currentUser.city}</h4>
      <p>{currentUser.aboutMe}</p>
      <List>
        <Subheader style={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#253031'
        }}>Your Challenges</Subheader>
        {mapChallenges}
      </List>
    </div>
  );

};

export default ViewProfile;

ViewProfile.propTypes = {
  currentUser: PropTypes.object,
  userChallenges: PropTypes.array
};
