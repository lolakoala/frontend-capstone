import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

class EditProfile extends Component {

  componentWillMount() {
    //get list of challenges from store
    this.props.getAllChallenges();
  }
  //upload photo- raisedbutton
  //username- textfield from material ui
  //logo - from persisted component?
  //about me- textfield from material ui
  //checkboxes of challenges- chips from material ui
  //submit button- raisedbutton
  //clear button- raisedbutton
  render() {
    console.log(this.props.allChallenges)
    return (<div>

    </div>);
  }
}

export default EditProfile;

EditProfile.propTypes = {
  currentUser: PropTypes.object,
  getAllChallenges: PropTypes.func,
  allChallenges: PropTypes.array
};
