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

  // const userChallenges = ['depression', 'anxiety'];
  // const currentUser = {
  //   city: 'Denver',
  //   userName: 'lolakoala',
  //   aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  // sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
  // ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  // in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  // sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  // };

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
        {/* <img
          // placeholder img url
          src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg"
          alt="Your avatar"
          className="profile-pic"
        /> */}
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
