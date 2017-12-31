import SelectCity from '../components/SelectCity/SelectCity.js';
import { connect } from 'react-redux';
import { addCity } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  addCity: (city, user) => {
    dispatch(addCity(city, user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);
