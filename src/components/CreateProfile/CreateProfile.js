import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Chip, RaisedButton } from 'material-ui';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import ReactUploadFile from 'react-upload-file';
import options from './options';

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

class CreateProfile extends Component {

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

  submitProfile = () => {
    // if we make another form, things might get hairy in the form object we're accessing from the store?
    const { submitProfile, currentUser, userChallenges, form } = this.props;
    const newUser = Object.assign({}, currentUser, { userChallenges }, form['object Object'].values);
    submitProfile(newUser);
  }

  //logo - from persisted component?

  render() {
    // const options = {
    //   baseUrl: 'http://127.0.0.1',
    //   query: {
    //     warrior: 'fight'
    //   }
    // };
    const userKeys = Object.keys(this.props.currentUser);
    if (userKeys.length > 2) {
      return <Redirect to="/editProfile" />;
    }
    return (<div>
      <form>
        {/* <RaisedButton label="Upload Photo" onClick={this.uploadPhoto} /> */}
        {/* This will go into finder to let you pick a file, but then throws an error. */}
        <ReactUploadFile
          options={options}
          chooseFileButton={<RaisedButton label="Choose Photo" />}
          uploadFileButton={<RaisedButton label="Upload Photo" />}
        />

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
        <RaisedButton label="Submit Profile" onClick={this.submitProfile} />
        <RaisedButton label="Clear Profile" onClick={this.props.clearProfile} />
      </form>
    </div>);
  }
}

const CreateProfileForm = reduxForm({
  form: 'CreateProfile',
  validate
})(CreateProfile);

export default CreateProfileForm;

CreateProfile.propTypes = {
  currentUser: PropTypes.object,
  getAllChallenges: PropTypes.func,
  allChallenges: PropTypes.array,
  form: PropTypes.object,
  addUserChallenge: PropTypes.func,
  userChallenges: PropTypes.array,
  submitProfile: PropTypes.func,
  clearProfile: PropTypes.func
};
