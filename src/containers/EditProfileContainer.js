import EditProfile from '../components/EditProfile/EditProfile.js';
import { connect } from 'react-redux';
import { getAllChallenges } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  allChallenges: store.allChallenges,
  form: store.form
});

const mapDispatchToProps = (dispatch) => ({
  getAllChallenges: () => {
    dispatch(getAllChallenges());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
