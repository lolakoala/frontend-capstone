import Dash from '../components/Dash/Dash.js';
import { connect } from 'react-redux';
import {
  getInsuranceList,
  getSpecialtyList,
  search,
  clearSearchResults,
  getAllChallenges
} from '../actions/actions';

const mapStateToProps =  store => ({
  insuranceList: store.insuranceList,
  specialtyList: store.specialtyList,
  searchResults: store.searchResults,
  allChallenges: store.allChallenges
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
  },
  getAllChallenges: () => {
    dispatch(getAllChallenges());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
