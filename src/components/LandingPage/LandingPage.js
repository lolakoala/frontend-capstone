import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class LandingPage extends Component {
  render() {
    return <RaisedButton label="Sign Up" />;
  }
}

export default LandingPage;

LandingPage.propTypes = {
  muiTheme: PropTypes.object
};
