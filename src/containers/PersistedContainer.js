import Persisted from '../components/Persisted/Persisted.js';
import { connect } from 'react-redux';
import { signOut } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => {
    dispatch(signOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Persisted);
