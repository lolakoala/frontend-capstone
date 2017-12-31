import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  const { currentUser, addCity } = this.props;

  handleChange = (event, index, value) => this.setState({value});

  addCity = (event, index, value) => {
    handleChange(event, index, value);
    addCity(this.state.value, currentUser);
  }

  render() {
    //if currentUser.location redirect to edit profile
    return (
      <div>
        <h2>Please select your city.</h2>
        <DropDownMenu value={this.state.value} onChange={this.addCity}>
          <MenuItem value="Denver" primaryText="denver" />
        </DropDownMenu>
      </div>
    );
  }
}

export default SelectCity;

SelectCity.propTypes = {
  currentUser: PropTypes.object,
  addCity: PropTypes.func
};
