import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './EditProfile.css';
import {
  Chip,
  RaisedButton,
  TextField,
  DropDownMenu,
  MenuItem
} from 'material-ui';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.currentUser.userName,
      aboutMe: props.currentUser.aboutMe,
      city: props.currentUser.city
    };
  }

  componentWillMount() {
    this.props.getAllChallenges();
  }

  // might not need this function if using react-upload
  uploadPhoto = () => {
    //dunno wtf will happen here
    // replace current photo
  }

  toggleChallenge = challenge => {
    const { userChallenges } = this.props;

    if (userChallenges.includes(challenge)) {
      this.props.removeUserChallenge(challenge, 'edit');
    } else {
      this.props.addUserChallenge(challenge, 'edit');
    }
  }

  renderChip = (challenge, index) => {
    const userChallenge = this.props.userChallenges.find(chal => chal === challenge);
    return (
      <Chip
        key={`${challenge}${index}`}
        onClick={() => { this.toggleChallenge(challenge); }}
        backgroundColor={userChallenge ? '#2F9C95' : ''}
        style={{
          marginBottom: '10px'
        }}
      >
        {challenge}
      </Chip>
    );
  }

  editProfile = () => {
    const { editProfile, currentUser, userChallenges, history } = this.props;
    // userImage key on this object to send image?
    const newUser = Object.assign(
      {},
      currentUser,
      { userChallenges },
      this.state
    );
    // somehow send image in editProfile action?
    editProfile(newUser);
    history.push('/profile');

  }

  render() {
    return (<div>
      <div className="pic-name-city">
        {/* if user has photo, display photo */}
        {/* <div className='pic-button'>
          <img
            // placeholder img url
            src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg"
            alt="Your avatar"
            className="profile-pic"
          />
          <RaisedButton label="Upload New Photo" onClick={this.uploadPhoto} className="change-pic"/>
        </div> */}
        <div className="name-city">
          <TextField
            name="userName"
            type="text"
            onChange={event => this.setState({ userName: event.target.value })}
            value={this.state.userName}
          />
          <DropDownMenu
            value={this.state.city}
            onChange={event => this.setState({ city: event.target.value })}
            className='city-dd'
          >
            <MenuItem value="Denver" primaryText="Denver" />
          </DropDownMenu>
          <TextField
            name="aboutMe"
            type="text"
            multiLine={true}
            rows={3}
            rowsMax={5}
            onChange={event => this.setState({ aboutMe: event.target.value })}
            value={this.state.aboutMe}
          />
        </div>
      </div>
      <div className='profile-bottom'>
        <div>
          <p>Add or remove challenges.</p>
          {this.props.allChallenges.map((challenge, index) => this.renderChip(challenge, index))}
        </div>
        <RaisedButton label="Submit Edits" onClick={this.editProfile} />
      </div>
    </div>);
  }
}

export default EditProfile;

EditProfile.propTypes = {
  currentUser: PropTypes.object,
  getAllChallenges: PropTypes.func,
  allChallenges: PropTypes.array,
  addUserChallenge: PropTypes.func,
  removeUserChallenge: PropTypes.func,
  userChallenges: PropTypes.array,
  editProfile: PropTypes.func,
  history: PropTypes.object
};
