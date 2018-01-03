import BuddyListWrapper from '../components/BuddyListWrapper/BuddyListWrapper.js';
import { connect } from 'react-redux';
import { getBuddies } from '../actions/actions';

const mapStateToProps =  store => ({
  currentUser: store.currentUser,
  buddyList: store.buddyList
});

const mapDispatchToProps = (dispatch) => ({
  getBuddies: (user) => {
    dispatch(getBuddies(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BuddyListWrapper);
