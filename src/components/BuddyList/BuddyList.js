import React from 'react';
import PropTypes from 'prop-types';
import {
// stuff
} from 'material-ui';

const BuddyList = () => {
  return (
    <div>

    </div>
  );
};

export default BuddyList;

BuddyList.propTypes = {
  buddies: PropTypes.array,
  toggleFavorite: PropTypes.func,
  currentUser: PropTypes.object
};
