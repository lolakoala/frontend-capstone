import React from 'react';
// don't think it needs props yet?
// import PropTypes from 'prop-types';
import icon from '../../assets/snail-shell.svg';
import {
  List,
  ListItem,
  Subheader
} from 'material-ui';

const Toolbox = () => {
  return (<List>
    <Subheader>Mental Health Resources</Subheader>
    <ListItem
      primaryText={<a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
    />
    <ListItem
      primaryText=<a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
    />
    <ListItem
      primaryText=<a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
    />
    <ListItem
      primaryText=<a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
    />
    <ListItem
      primaryText=<a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools.com!</a>
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
    />
  </List>);
};

export default Toolbox;
