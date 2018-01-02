import LandingPage from '../components/LandingPage/LandingPage.js';
import { connect } from 'react-redux';
import {} from '../actions/actions';

const mapStateToProps =  store => ({
});

const mapDispatchToProps = (dispatch) => ({
  // loginSuccess: (email) => {
  //   dispatch(loginSuccess(email));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
