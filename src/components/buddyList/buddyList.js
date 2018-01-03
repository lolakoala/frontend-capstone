import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
// stuff from material-ui
} from 'material-ui';

class BuddyList extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    const { currentUser, location, getBuddies } = this.props;

    if (location.pathname === '/buddies') {
      getBuddies(currentUser);
    }
  }

  render() {
    return (
      <div>
        {/* search box, searches in real time */}
        {/* list of buddies from buddyList, must be able to favorite*/}
      </div>
    );
  }
}

export default BuddyList;

BuddyList.propTypes = {
  location: PropTypes.object,
  getBuddies: PropTypes.func,
  currentUser: PropTypes.object
};
