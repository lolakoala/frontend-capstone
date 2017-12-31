import SelectCity from '../components/SelectCity/SelectCity.js';
import { connect } from 'react-redux';
import {  } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);
