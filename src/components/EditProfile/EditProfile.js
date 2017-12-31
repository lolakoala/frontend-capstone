import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Chip, RaisedButton } from 'material-ui';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const validate = values => {
  const errors = {};
  const requiredFields = ['userName'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

class EditProfile extends Component {

  componentWillMount() {
    //get list of challenges from store
    this.props.getAllChallenges();
  }

  uploadPhoto = () => {
    //dunno wtf will happen here
  }

  addChallenge = challenge => {
    // change color of chip
    // add challenge to userChallenges
    this.props.addUserChallenge(challenge);
  }

  renderChip = (challenge, index) => {
    return (
      <Chip
        key={`${challenge}${index}`}
        onClick={() => { this.addChallenge(challenge); }}>
        {challenge}
      </Chip>
    );
  }

  //logo - from persisted component?
  //submit button- raisedbutton
  //clear button- raisedbutton
  render() {
    return (<div>
      <form>
        {/* if user has photo, display photo and button to change it (or adjust button below to say 'Change Photo') */}
        <RaisedButton label="Upload Photo" onClick={this.uploadPhoto} />
        <Field
          name="userName"
          component={TextField}
          hintText="Username: Must be at least 5 characters."
          type="text"
        />
        <Field
          component={TextField}
          name="aboutMe"
          hintText="Tell us a bit about yourself: whatever you're open to sharing."
          type="text"
          multiLine={true}
          rows={5}
          rowsMax={10}
        />
        <div>
          <p>Select challenges you identify with.</p>
          {this.props.allChallenges.map((challenge, index) => this.renderChip(challenge, index))}
        </div>
      </form>
    </div>);
  }
}

const EditProfileForm = reduxForm({
  form: 'EditProfile',
  validate
})(EditProfile);

export default EditProfileForm;

EditProfile.propTypes = {
  currentUser: PropTypes.object,
  getAllChallenges: PropTypes.func,
  allChallenges: PropTypes.array,
  form: PropTypes.object,
  addUserChallenge: PropTypes.func,
  userChallenges: PropTypes.array
};
