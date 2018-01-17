import CreateProfile from '../components/CreateProfile/CreateProfile.js';
import { connect } from 'react-redux';
import {
  getAllChallenges,
  addUserChallenge,
  submitProfile,
  removeUserChallenge,
  addImage
} from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  allChallenges: store.allChallenges,
  userChallenges: store.userChallenges,
  userImage: store.userImage
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
  submitProfile: (newUser, id) => {
    dispatch(submitProfile(newUser, id));
  },
  addImage: imageStuff => {
    dispatch(addImage(imageStuff));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
