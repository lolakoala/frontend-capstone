import BuddyListWrapper from '../components/BuddyListWrapper/BuddyListWrapper.js';
import { connect } from 'react-redux';
import { getBuddies, getPreferredProfs } from '../actions/actions';

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BuddyListWrapper);
