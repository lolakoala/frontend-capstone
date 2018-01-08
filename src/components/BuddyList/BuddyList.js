import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, FloatingActionButton } from 'material-ui';
import addHeart from '../../assets/add-heart.png';
import minusHeart from '../../assets/minus-heart.png';
import minus from '../../assets/minus.png';

const BuddyList = ({ buddies, toggleFavorite, currentUser, faves }) => {
  const toggleView = () => {
    // if not shown
    // show aboutMe and userChallenges
    // change button text to Show Less
    // else
    // hide aboutMe and userChallenges
    // change button text to Show More
  };

  const buddyStuff = buddies.map((buddy, index) => {
    const isFave = faves.find(fave => fave.userName === buddy.userName);
    return <div key={`${buddy.userName}${index}`}>
      {/* img tag w/ avatar- must send avatar in all user objects */}
      <p>{buddy.userName}</p>

      <img
        src={isFave ? addHeart : minusHeart}
        alt='favorite indicator'
        onClick={() => toggleFavorite(currentUser, 'buddy', buddy, isFave)}
      />
      <img src={minus} alt="show less" onClick={toggleView} />
      {/* <RaisedButton label="Show Less" onClick={toggleView}/> */}
      {/* hidden p tag with aboutMe */}
      {/* hidden List from material-ui with userChallenges */}
    </div>;
  });

  return (
    <div>
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
