import CreateProfile from '../components/CreateProfile/CreateProfile.js';
import { connect } from 'react-redux';
import {
  getAllChallenges,
  addUserChallenge,
  submitProfile,
  removeUserChallenge
} from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  allChallenges: store.allChallenges,
  userChallenges: store.userChallenges
});

const mapDispatchToProps = dispatch => ({
  getAllChallenges: () => {
    dispatch(getAllChallenges());
  },
  addUserChallenge: (challenge, type) => {
    dispatch(addUserChallenge(challenge, type));
  },
  removeUserChallenge: (challenge, type) => {
    dispatch(removeUserChallenge(challenge, type));
  },
  submitProfile: newUser => {
    dispatch(submitProfile(newUser));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
