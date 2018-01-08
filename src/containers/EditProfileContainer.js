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
  addUserChallenge: (challenge, type) => {
    dispatch(addUserChallenge(challenge, type));
  },
  removeUserChallenge: (challenge, type) => {
    dispatch(removeUserChallenge(challenge, type));
  },
  editProfile: newUser => {
    dispatch(editProfile(newUser));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
