import React from 'react';
import PropTypes from 'prop-types';
// import { RaisedButton, FloatingActionButton } from 'material-ui';
import shell from '../../assets/snail-shell.svg';
import addHeart from '../../assets/add-heart.png';
import minusHeart from '../../assets/minus-heart.png';
import minus from '../../assets/minus.png';

const BuddyList = ({ buddies, toggleFavorite, currentUser, faves }) => {
  const toggleView = () => {
    // if not shown
    // make fetch for user challenges
    // show aboutMe and userChallenges
    // change button text to Show Less
    // else
    // hide aboutMe and userChallenges
    // change button text to Show More
  };

  const buddyStuff = [{ userName: 'lola '}].map((buddy, index) => {
    const isFave = faves.find(fave => fave.userName === buddy.userName);
    return <div key={`${buddy.userName}${index}`}>
      {/* img tag w/ avatar- must send avatar in all user objects */}
      <img src={shell} alt="shell icon" />
      {/* <p>{buddy.userName}</p> */}
      <p>LolaKoala</p>

      <img
        src={isFave ? addHeart : minusHeart}
        alt='favorite indicator'
        onClick={() => toggleFavorite(currentUser, 'buddy', buddy, isFave)}
      />
      <img src={minus} alt="show less" onClick={toggleView} />
      {/* Not going to list their challenges yet because should happen on click of show more */}
      {/* <p>{buddy.aboutMe}</p> */}
      <p>I am a 32 year old genderqueer person who just started a career as a software developer. I struggle with anxiety daily, and I am happy to talk to anyone about how I experience anxiety and how I survive a typical day.</p>
    </div>;
  });

  return (
    <div>
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
