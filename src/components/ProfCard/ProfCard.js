import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Subheader } from 'material-ui';
import shell from '../../assets/snail-shell.svg';
import addHeart from '../../assets/add-heart.png';
import minusHeart from '../../assets/minus-heart.png';
import minus from '../../assets/minus.png';
import plus from '../../assets/plus.png';

class ProfCard extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  toggleView = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  mapList = list => list.map((item, index) => {
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

  render() {
    const { prof, currentUser, isFave, toggleFavorite } = this.props;
    return <div className="buddycard">
      {/* img tag w/ avatar */}
      <div className='profname-faveicon'>
        <img src={shell} alt="shell icon" className='proflist-shell'/>
        <p>{prof.name}</p>
        <img src={plus} alt="show more" onClick={this.toggleView} style={{ display: this.state.expanded ? 'none' : 'inline'}} className="plus-minus" />
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
      <div className='prof-about' style={{ display: this.state.expanded ? 'flex' : 'none'}}>
        <List>
          <Subheader style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#253031'
          }}>Insurance Accepted</Subheader>
          {this.mapList(prof.insurance)}
        </List>
        <List>
          <Subheader style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#253031'
          }}>Specialties</Subheader>
          {this.mapList(prof.specialties)}
        </List>
        <img src={minus} alt="show less" onClick={this.toggleView} className="plus-minus" />
      </div>
    </div>;
  }
}

export default ProfCard;

ProfCard.propTypes = {
  prof: PropTypes.obj,
  currentUser: PropTypes.obj,
  isFave: PropTypes.boolean,
  toggleFavorite: PropTypes.func
};
