import React from 'react';
import PropTypes from 'prop-types';
import css from './ProfsList.css';
import ProfCard from '../ProfCard/ProfCard';

const ProfsList = ({ profs, toggleFavorite, currentUser, faves }) => {
  const profStuff = profs.map((prof, index) => {
    const isFave = faves.find(fave => fave.name === prof.name);
    return <ProfCard
      key={prof.id}
      prof={prof}
      isFave={isFave}
      toggleFavorite={toggleFavorite}
      currentUser={currentUser}
    />;
  });

  return (
    <div className='profslist'>
      <p>Click the heart icon to add or remove a professional from your preferred professionals.</p>
      {profStuff}
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
