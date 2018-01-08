import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, FloatingActionButton } from 'material-ui';
import icon from '../../assets/snail-shell.svg';

const BuddyList = ({ buddies, toggleFavorite, currentUser, faves }) => {
  const showMore = () => {
    // if not shown
    // show aboutMe and userChallenges
    // change button text to Show Less
    // else
    // hide aboutMe and userChallenges
    // change button text to Show More
  };

  const faveButton = <FloatingActionButton
    mini={true}
  >
    <img src={icon} alt='snail shell' />
  </FloatingActionButton>;

  const buddyStuff = buddies.map((buddy, index) => {
    const isFave = faves.find(fave => fave.userName === buddy.userName);
    return <div key={`${buddy.userName}${index}`}>
      {/* img tag w/ avatar- must send avatar in all user objects */}
      <p onClick={() => toggleFavorite(currentUser, 'buddy', buddy, isFave)}>{buddy.userName}</p>
      {faveButton}
      {/* if favorite, render icon button to unfavorite */}
      {/* else, render icon button to favorite */}
      {/* change to icon button */}
      <RaisedButton label="Show More" onClick={showMore}/>
      {/* hidden p tag with aboutMe */}
      {/* hidden Chips from material-ui with userChallenges */}
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
