import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Tabs, Tab } from 'material-ui';
import { Link } from 'react-router-dom';


const Dash = (props) => {
  return (
    <div>
      <Toolbar>
        <Link to="/chat">Chat</Link>
        <Link to="/preferredProffesionals">My Preferred Proffesionals</Link>
        <Link to="/buddies">My Buddies</Link>
        {/* In My Toolbox, should we add ability to add your own resources? */}
        <Link to="/toolbox">My Toolbox</Link>
      </Toolbar>
      <Tabs>
        <Tab label="Search Professionals">
          {/* Search Professionals Component here */}
          <div>professionals</div>
        </Tab>
        <Tab label="Search Users">
          {/* Search Users Component Here */}
          <div>users</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dash;

Dash.propTypes = {

};
