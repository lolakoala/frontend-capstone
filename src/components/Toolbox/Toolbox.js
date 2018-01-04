import React from 'react';
// don't think it needs props yet?
// import PropTypes from 'prop-types';
import icon from '../../assets/snail-shell.svg';
import css from './Toolbox.css';
import {
  List,
  ListItem,
  Subheader
} from 'material-ui';

const Toolbox = () => {
  return (<List>
    <Subheader style={{
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#253031'
    }}>Mental Health Resources</Subheader>
    <ListItem
      primaryText={<a href="https://www.w3schools.com" className="toolbox-link" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a href="https://www.w3schools.com" className="toolbox-link" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a href="https://www.w3schools.com" className="toolbox-link" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a href="https://www.w3schools.com" className="toolbox-link" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a href="https://www.w3schools.com" className="toolbox-link" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
  </List>);
};

export default Toolbox;
