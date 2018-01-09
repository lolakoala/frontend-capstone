import ViewProfile from '../components/ViewProfile/ViewProfile.js';
import { connect } from 'react-redux';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  userChallenges: store.userChallenges
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
