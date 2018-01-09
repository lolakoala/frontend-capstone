import Dash from '../components/Dash/Dash.js';
import { connect } from 'react-redux';
import {
  getInsuranceList,
  getSpecialtyList,
  search,
  clearSearchResults,
  getAllChallenges,
  profSearch
} from '../actions/actions';

const mapStateToProps =  store => ({
  insuranceList: store.insuranceList,
  specialtyList: store.specialtyList,
  allChallenges: store.allChallenges,
  currentUser: store.currentUser,
  profSearch: store.profSearch
});

const mapDispatchToProps = (dispatch) => ({
  getInsuranceList: () => {
    dispatch(getInsuranceList());
  },
  getSpecialtyList: () => {
    dispatch(getSpecialtyList());
  },
  search: (array, type) => {
    dispatch(search(array, type));
  },
  clearSearchResults: () => {
    dispatch(clearSearchResults());
  },
  getAllChallenges: () => {
    dispatch(getAllChallenges());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
