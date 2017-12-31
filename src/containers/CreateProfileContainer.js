import CreateProfile from '../components/CreateProfile/CreateProfile.js';
import { connect } from 'react-redux';
import {
  getAllChallenges,
  addUserChallenge,
  submitProfile,
  clearProfile
} from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  allChallenges: store.allChallenges,
  form: store.form,
  userChallenges: store.userChallenges
});

const mapDispatchToProps = dispatch => ({
  getAllChallenges: () => {
    dispatch(getAllChallenges());
  },
  addUserChallenge: challenge => {
    dispatch(addUserChallenge(challenge));
  },
  submitProfile: newUser => {
    dispatch(submitProfile(newUser));
  },
  clearProfile: () => {
    dispatch(clearProfile());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
