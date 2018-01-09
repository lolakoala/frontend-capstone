import Persisted from '../components/Persisted/Persisted.js';
import { connect } from 'react-redux';
import { signOut, clearSearchResults } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => {
    dispatch(signOut());
  },
  clearSearchResults: () => {
    dispatch(clearSearchResults());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Persisted);
