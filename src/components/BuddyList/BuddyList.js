import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';

const BuddyList = ({ buddies, toggleFavorite, currentUser }) => {
  const showMore = () => {
    // if not shown
    // show aboutMe and userChallenges
    // change button text to Show Less
    // else
    // hide aboutMe and userChallenges
    // change button text to Show More
  };

  const buddyStuff = buddies.map((buddy, index) => {
    // how to we know buddy being rendered is a fave of user?
    return <div key={`${buddy.userName}${index}`}>
      {/* img tag w/ avatar- must send avatar in all user objects */}
      <p>{buddy.Username}</p>
      {/* if favorite, render button to unfavorite */}
      {/* else, render button to favorite */}
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
