import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Subheader } from 'material-ui';
import shell from '../../assets/snail-shell.svg';
import addHeart from '../../assets/add-heart.png';
import minusHeart from '../../assets/minus-heart.png';
import minus from '../../assets/minus.png';
import css from './ProfsList.css';

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

  const mapList = list => list.map((item, index) => {
    return <ListItem
      primaryText={item}
      leftAvatar={<img src={shell} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color:'#2F9C95'
      }}
      disabled={true}
      key={`${item}${index}`}
    />;
  });

  const profStuff = profs.map((prof, index) => {
    const isFave = faves.find(fave => fave.name === prof.name);
    return <div key={`${prof.name}${index}`}>
      {/* img tag w/ avatar */}
      <div className='profname-faveicon'>
        <img src={shell} alt="shell icon" className='proflist-shell'/>
        <p>{prof.name}</p>
        <img
          className='add-prof'
          src={isFave ? minusHeart : addHeart}
          alt='favorite indicator'
          onClick={() => toggleFavorite(currentUser, 'prof', prof, isFave)}
        />
      </div>
      <div className='email-phone'>
        <a href={`mailto:${prof.email}`}>Email this professional.</a>
        <p>{`Phone: ${prof.phone}`}</p>
      </div>
      <div className='prof-about'>
        <List>
          <Subheader style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#253031'
          }}>Insurance Accepted</Subheader>
          {mapList(prof.insurance)}
        </List>
        <List>
          <Subheader style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#253031'
          }}>Specialties</Subheader>
          {mapList(prof.specialties)}
        </List>
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
