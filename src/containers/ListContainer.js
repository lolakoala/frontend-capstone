import ListWrapper from '../components/ListWrapper/ListWrapper.js';
import { connect } from 'react-redux';
import {
  getBuddies,
  getPreferredProfs,
  toggleFavorite
} from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  buddyList: store.buddyList,
  profsList: store.profsList
});

const mapDispatchToProps = (dispatch) => ({
  getBuddies: user => {
    dispatch(getBuddies(user));
  },
  getPreferredProfs: user => {
    dispatch(getPreferredProfs(user));
  },
  toggleFavorite: (user, type, personObject) => {
    dispatch(toggleFavorite(user, type, personObject));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);
