import Dash from '../components/Dash/Dash.js';
import { connect } from 'react-redux';
import {
  getInsuranceList,
  getSpecialtyList,
  search,
  clearSearchResults
} from '../actions/actions';

const mapStateToProps =  store => ({
  insuranceList: store.insuranceList,
  specialtyList: store.specialtyList,
  searchResults: store.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  getInsuranceList: () => {
    dispatch(getInsuranceList());
  },
  getSpecialtyList: () => {
    dispatch(getSpecialtyList());
  },
  search: searchObject => {
    dispatch(search(searchObject));
  },
  clearSearchResults: () => {
    dispatch(clearSearchResults());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
