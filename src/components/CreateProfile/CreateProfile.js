import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Chip, RaisedButton, TextField } from 'material-ui';
import css from './CreateProfile.css';

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      aboutMe: ''
    };
  }

  componentWillMount() {
    this.props.getAllChallenges();
  }

  // might not need this function if using react-upload
  uploadPhoto = () => {
    //dunno wtf will happen here
  }

  toggleChallenge = challenge => {
    const { userChallenges } = this.props;

    if (userChallenges.includes(challenge)) {
      this.props.removeUserChallenge(challenge, 'create');
    } else {
      this.props.addUserChallenge(challenge, 'create');
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

  submitProfile = () => {
    const { submitProfile, currentUser, userChallenges } = this.props;
    // userImage key on this object to send image?
    const newUser = Object.assign(
      {},
      currentUser,
      { userChallenges },
      this.state
    );
    // somehow send image in submitProfile action?
    submitProfile(newUser);
  }

  render() {
    if (this.props.currentUser.userName) {
      return <Redirect to="/dash" />;
    }
    return (<div>
      <div className='pic-name-city'>
        <div className='pic-button'>
          {/* on upload, display photo */}
          <RaisedButton label="Upload Photo" onClick={this.uploadPhoto} />
        </div>
        <div className='name-city'>
          <TextField
            name="userName"
            hintText="Username: Must be at least 5 characters."
            type="text"
            onChange={event => this.setState({ userName: event.target.value })}
            value={this.state.userName}
          />
          <TextField
            name="aboutMe"
            hintText="Tell us a bit about yourself: whatever you're open to sharing."
            type="text"
            multiLine={true}
            rows={1}
            rowsMax={10}
            onChange={event => this.setState({ aboutMe: event.target.value })}
            value={this.state.aboutMe}
          />
        </div>
      </div>
      <div className='profile-bottom'>
        <div>
          <p>Select challenges you identify with.</p>
          {this.props.allChallenges.map((challenge, index) => this.renderChip(challenge, index))}
        </div>
        <RaisedButton label="Submit Profile" onClick={this.submitProfile} />
      </div>
    </div>);
  }
}

export default CreateProfile;

CreateProfile.propTypes = {
  currentUser: PropTypes.object,
  getAllChallenges: PropTypes.func,
  allChallenges: PropTypes.array,
  addUserChallenge: PropTypes.func,
  removeUserChallenge: PropTypes.func,
  userChallenges: PropTypes.array,
  submitProfile: PropTypes.func
};
