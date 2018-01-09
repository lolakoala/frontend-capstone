import React from 'react';
import PropTypes from 'prop-types';
import shell from '../../assets/snail-shell.svg';
import addHeart from '../../assets/add-heart.png';
import minusHeart from '../../assets/minus-heart.png';
import minus from '../../assets/minus.png';
import css from './BuddyList.css';

const BuddyList = ({ buddies, toggleFavorite, currentUser, faves }) => {
  const toggleView = () => {

  };

  const buddyStuff = buddies.map((buddy, index) => {
    const isFave = faves.find(fave => fave.userName === buddy.userName);
    return <div key={`${buddy.userName}${index}`}>
      <div className='username-faveicon'>
        <img src={shell} alt="shell icon" className='buddylist-shell'/>
        <p>{buddy.userName}</p>
        <img
          className='add-buddy'
          src={isFave ? addHeart : minusHeart}
          alt='favorite indicator'
          onClick={() => toggleFavorite(currentUser, 'buddy', buddy, isFave)}
        />
      </div>
      <div className='buddy-about'>
        <p>{buddy.aboutMe}</p>
        <img src={minus} alt="show less" onClick={toggleView} />
      </div>
    </div>;
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
