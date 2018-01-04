import EditProfile from '../components/EditProfile/EditProfile.js';
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
  addUserChallenge: challenge => {
    dispatch(addUserChallenge(challenge));
  },
  removeUserChallenge: challenge => {
    dispatch(removeUserChallenge(challenge));
  },
  submitProfile: newUser => {
    dispatch(submitProfile(newUser));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
