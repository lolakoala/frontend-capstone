import ViewProfile from '../components/ViewProfile/ViewProfile.js';
import { connect } from 'react-redux';
// import { addCity } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  userChallenges: store.userChallenges
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
