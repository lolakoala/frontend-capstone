import EditProfile from '../components/EditProfile/EditProfile.js';
import { connect } from 'react-redux';
import { getAllChallenges } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  allChallenges: store.allChallenges
});

const mapDispatchToProps = (dispatch) => ({
  getChallenges: () => {
    dispatch(getAllChallenges());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
