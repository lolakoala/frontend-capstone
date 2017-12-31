import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    //if currentUser.location redirect to edit profile
    return (
      <div>
        <h2>Please select your city.</h2>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value="Denver" primaryText="denver" />
        </DropDownMenu>
      </div>
    );
  }
}

export default SelectCity;

SelectCity.propTypes = {

};
