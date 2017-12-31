import LandingPage from '../components/LandingPage/LandingPage.js';
import { connect } from 'react-redux';
import {
  loginSuccess
} from '../actions/actions';

const mapStateToProps =  store => ({
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: () => {
    dispatch(loginSuccess());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
