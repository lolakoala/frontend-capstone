import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  // componentDidMount() {
  //   this.props.getAllChallenges();
  //   // const { currentUser } = this.props;
  //   // this.setState({
  //   //   userName: currentUser.userName,
  //   //   aboutMe: currentUser.aboutMe,
  //   //   city: currentUser.city
  //   // });
  // }

  // componentDidMount() {
  //   const { currentUser } = this.props;
  //   this.setState({
  //     userName: currentUser.userName,
  //     aboutMe: currentUser.aboutMe,
  //     city: currentUser.city
  //   });
  // }

  // might not need this function if using react-upload
  uploadPhoto = () => {
    //dunno wtf will happen here
    // replace current photo
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

  // change to editProfile
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
    return (<div>
      {/* if user has photo, display photo */}
      <img
        // placeholder img url
        src="https://speakerdata2.s3.amazonaws.com/photo/image/839843/thats-what-she-said-0413-1-lgn.jpg"
        alt="Your avatar"
        className="profile-pic"
      />
      <RaisedButton label="Upload New Photo" onClick={this.uploadPhoto} />
      <TextField
        name="userName"
        // hintText="Username: Must be at least 5 characters."
        type="text"
        onChange={event => this.setState({ userName: event.target.value })}
        value={this.state.userName}
      />
      <DropDownMenu value={this.state.city} onChange={event => this.setState({ city: event.target.value })}>
        <MenuItem value="Denver" primaryText="Denver" />
      </DropDownMenu>
      <TextField
        name="aboutMe"
        // hintText="Tell us a bit about yourself: whatever you're open to sharing."
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
      <RaisedButton label="Submit Edits" onClick={this.submitProfile} />
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
  submitProfile: PropTypes.func
};
