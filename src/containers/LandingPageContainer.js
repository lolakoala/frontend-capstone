import LandingPage from '../components/LandingPage/LandingPage.js';
import { connect } from 'react-redux';
import { loginAttempt } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  loginAttempt: (email) => {
    dispatch(loginAttempt(email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
