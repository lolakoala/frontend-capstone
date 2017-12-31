import LandingPage from '../components/LandingPage/LandingPage.js';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (email) => {
    dispatch(loginSuccess(email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
