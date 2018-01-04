import React from 'react';
// don't think it needs props yet?
// import PropTypes from 'prop-types';
import icon from '../../assets/snail-shell.svg';
import {
  MobileTearSheet,
  List,
  ListItem,
  Subheader
} from 'material-ui';

const Toolbox = () => {
  return (<MobileTearSheet>
    <List>
      <Subheader>Mental Health Resources</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      />
    </List>
  </MobileTearSheet>);
};

export default Toolbox;
