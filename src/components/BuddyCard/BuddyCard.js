import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shell from '../../assets/snail-shell.svg';
import addHeart from '../../assets/add-heart.png';
import minusHeart from '../../assets/minus-heart.png';
import minus from '../../assets/minus.png';
import plus from '../../assets/plus.png';

class BuddyCard extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  toggleView = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { buddy, currentUser, isFave, toggleFavorite } = this.props;
    return <div className='buddycard'>
      {/* img tag w/ avatar- must send avatar in all user objects */}
      <div className='username-faveicon'>
        <img src={shell} alt="shell icon" className='buddylist-shell'/>
        <p>{buddy.userName}</p>
        <img src={plus} alt="show more" onClick={this.toggleView} style={{ display: this.state.expanded ? 'none' : 'inline'}} className="plus-minus" />
        <img
          className='add-buddy'
          src={isFave ? addHeart : minusHeart}
          alt='favorite indicator'
          onClick={() => toggleFavorite(currentUser, 'buddy', buddy, isFave)}
        />
      </div>
      <div className='buddy-about' style={{ display: this.state.expanded ? 'flex' : 'none'}}>
        <p>{buddy.aboutMe}</p>
        <img src={minus} alt="show less" onClick={this.toggleView} className="plus-minus" />
        {/* Not going to list their challenges yet because should happen on click of show more */}
      </div>
    </div>;
  }
}

export default BuddyCard;

BuddyCard.propTypes = {
  buddy: PropTypes.obj,
  currentUser: PropTypes.obj,
  isFave: PropTypes.boolean,
  toggleFavorite: PropTypes.func
};
