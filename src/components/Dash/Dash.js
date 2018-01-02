import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from 'material-ui';
import { Link } from 'react-router-dom';

// search professionals section
// search users section

class Dash extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  render() {
    return (
      <div>
        <Toolbar>
          <Link to="/chat">Chat</Link>
          <Link to="/preferredProffesionals">My Preferred Proffesionals</Link>
          <Link to="/buddies">My Buddies</Link>
          {/* In My Toolbox, should we add ability to add your own resources? */}
          <Link to="/toolbox">My Toolbox</Link>
        </Toolbar>
      </div>
    );
  }
}

export default Dash;

Dash.propTypes = {

};
