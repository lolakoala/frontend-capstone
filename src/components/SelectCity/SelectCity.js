import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';
import css from './SelectCity.css';

class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Denver'};
  }

  handleChange = (event, index, value) => this.setState({value});

  addCity = () => {
    const { currentUser, addCity } = this.props;

    addCity(this.state.value, currentUser);
  }

  render() {
    if (this.props.currentUser.city) {
      return <Redirect to="/createProfile" />;
    }

    return (
      <div className="select-city">
        <h2>Please select your city.</h2>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value="Denver" primaryText="Denver" />
        </DropDownMenu>
        <RaisedButton label="Submit" onClick={this.addCity} style={{ marginTop: '30px' }}/>
      </div>
    );
  }
}

export default SelectCity;

SelectCity.propTypes = {
  currentUser: PropTypes.object,
  addCity: PropTypes.func
};
