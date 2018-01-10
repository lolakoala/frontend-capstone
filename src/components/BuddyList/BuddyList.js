import React from 'react';
import PropTypes from 'prop-types';
import BuddyCard from '../BuddyCard/BuddyCard';
import css from './BuddyList.css';

const BuddyList = ({ buddies, toggleFavorite, currentUser, faves }) => {
  const buddyStuff = buddies.map((buddy, index) => {
    const isFave = faves.find(fave => fave.userName === buddy.userName);
    return <BuddyCard
      key={`${buddy.userName}${buddy.id}`}
      toggleFavorite={toggleFavorite}
      currentUser={currentUser}
      buddy={buddy}
      isFave={isFave}
    />;
  });

  return (
    <div className='buddylist'>
      <p>Click the heart icon to add or remove a user from your buddies.</p>
      {buddyStuff}
    </div>
  );
};

export default BuddyList;

BuddyList.propTypes = {
  buddies: PropTypes.array,
  toggleFavorite: PropTypes.func,
  currentUser: PropTypes.object,
  faves: PropTypes.array
};
