import Dash from '../components/Dash/Dash.js';
import { connect } from 'react-redux';
import {} from '../actions/actions';

const mapStateToProps =  store => ({
});

const mapDispatchToProps = (dispatch) => ({
  // loginSuccess: (email) => {
  //   dispatch(loginSuccess(email));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
