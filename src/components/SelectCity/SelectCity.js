import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem } from 'material-ui';

class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Denver'};
  }

  handleChange = (event, index, value) => this.setState({value});

  addCity = (event, index, value) => {
    const { currentUser, addCity } = this.props;

    this.handleChange(event, index, value);
    addCity(value, currentUser);
  }

  render() {
    if (this.props.currentUser.city) {
      return <Redirect to="/createProfile" />;
    }

    return (
      <div>
        <h2>Please select your city.</h2>
        <DropDownMenu value={this.state.value} onChange={this.addCity}>
          <MenuItem value="Denver" primaryText="Denver" />
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
