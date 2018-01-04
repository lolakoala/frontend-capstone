import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Chip, RaisedButton, TextField } from 'material-ui';

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
      // change chip back to original color
      this.props.removeUserChallenge(challenge);
    } else {
      // change color of chip
      this.props.addUserChallenge(challenge);
    }
  }

  renderChip = (challenge, index) => {
    return (
      <Chip
        key={`${challenge}${index}`}
        onClick={() => { this.toggleChallenge(challenge); }}>
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
      <RaisedButton label="Upload Photo" onClick={this.uploadPhoto} />
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
        rows={5}
        rowsMax={10}
        onChange={event => this.setState({ aboutMe: event.target.value })}
        value={this.state.aboutMe}
      />
      <div>
        <p>Select challenges you identify with.</p>
        {this.props.allChallenges.map((challenge, index) => this.renderChip(challenge, index))}
      </div>
      <RaisedButton label="Submit Profile" onClick={this.submitProfile} />
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
  submitProfile: PropTypes.func,
  history: PropTypes.object
};
