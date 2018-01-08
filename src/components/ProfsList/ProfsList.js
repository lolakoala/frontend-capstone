import React from 'react';
import PropTypes from 'prop-types';
import {
// stuff
} from 'material-ui';
import shell from '../../assets/snail-shell.svg';
import addHeart from '../../assets/add-heart.png';
import minusHeart from '../../assets/minus-heart.png';
import minus from '../../assets/minus.png';
import css from './ProfsList.css';

// {

//   phone: prof.professional_phone,
//   insurance: prof.professional_insurance_providers,
//   specialties: prof.professional_specialties
// }

const ProfsList = ({ profs, toggleFavorite, currentUser, faves }) => {
  const toggleView = () => {
    // if not shown
    // make fetch for user challenges
    // show aboutMe and userChallenges
    // change button text to Show Less
    // else
    // hide aboutMe and userChallenges
    // change button text to Show More
  };

  const profStuff = profs.map((prof, index) => {
    const isFave = faves.find(fave => fave.name === prof.name);
    return <div key={`${prof.name}${index}`}>
      {/* img tag w/ avatar */}
      <div className='profname-faveicon'>
        <img src={shell} alt="shell icon" className='buddylist-shell'/>
        <p>{prof.name}</p>
        <a href={`mailto:${prof.email}`}>Email this professional.</a>
        <img
          className='add-buddy'
          src={isFave ? addHeart : minusHeart}
          alt='favorite indicator'
          onClick={() => toggleFavorite(currentUser, 'prof', prof, isFave)}
        />
      </div>
      <div className='buddy-about'>
        {/* need list for specialies and insurances */}
        <img src={minus} alt="show less" onClick={toggleView} />
      </div>
    </div>;
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
