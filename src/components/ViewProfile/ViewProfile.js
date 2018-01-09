import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../assets/snail-shell.svg';
import css from './ViewProfile.css';
import { List,
  ListItem,
  Subheader,
  RaisedButton
} from 'material-ui';

const ViewProfile = ({ currentUser, userChallenges, history }) => {

  const mapChallenges = userChallenges.map((challenge, index) => {
    return <ListItem
      primaryText={challenge}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color:'#2F9C95'
      }}
      disabled={true}
      key={`${challenge}${index}`}
    />;
  });

  const editProfile = () => {
    history.push('/editProfile');
  };


  return (
    <div>
      <div className='pic-name-city'>
        <div className='name-city'>
          <h3>{currentUser.userName}</h3>
          <h4>{currentUser.city}</h4>
          <p>{currentUser.aboutMe}</p>
        </div>
      </div>
      <div className='profile-bottom'>
        <List>
          <Subheader style={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#253031'
          }}>Your Challenges</Subheader>
          {mapChallenges}
        </List>
        <RaisedButton
          label="Edit Profile"
          onClick={editProfile}
        />
      </div>
    </div>
  );

};

export default ViewProfile;

ViewProfile.propTypes = {
  currentUser: PropTypes.object,
  userChallenges: PropTypes.array,
  history: PropTypes.object
};
