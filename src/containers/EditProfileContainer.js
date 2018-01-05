import EditProfile from '../components/EditProfile/EditProfile.js';
import { connect } from 'react-redux';
import {
  getAllChallenges,
  addUserChallenge,
  editProfile,
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
  editProfile: newUser => {
    dispatch(editProfile(newUser));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
