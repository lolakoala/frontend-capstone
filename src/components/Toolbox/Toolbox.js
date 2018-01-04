import React from 'react';
// don't think it needs props yet?
// import PropTypes from 'prop-types';
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
        leftAvatar={}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={}
      />
    </List>
  </MobileTearSheet>);
};

export default Toolbox;
