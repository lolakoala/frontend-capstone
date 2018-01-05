import React from 'react';
import PropTypes from 'prop-types';
import {
// stuff
} from 'material-ui';

const ProfsList = () => {
  return (
    <div>

    </div>
  );
};

export default ProfsList;

ProfsList.propTypes = {
  profs: PropTypes.array,
  toggleFavorite: PropTypes.func,
  currentUser: PropTypes.object,
  faves: PropTypes.array
};
