import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

class BuddyList extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    const { currentUser, location, getBuddies } = this.props;

    if (location.pathname === '/buddies') {
      getBuddies(currentUser);
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { location, buddyList } = this.props;
    const list = location.pathname === '/buddies' ? 'buddies' : 'buddy search results';
    const filteredBuddies = buddyList.filter(buddy => {
      const searchableBuddy = Object.assign({}, buddy, { city: '' });
      const buddyValues = Object.values(searchableBuddy);
      let isMatch = false;
      buddyValues.forEach(value => {
        if (value.includes(this.state.value)) {
          isMatch = true;
        }
      });
      return isMatch === true;
    });

    return (
      <div>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
          hintText={`Type here to filter your ${list}.`}
        />
        {/* list of buddies from buddyList, must be able to favorite*/}
        {/* if this.state.value, filter buddyList according to value */}
      </div>
    );
  }
}

export default BuddyList;

BuddyList.propTypes = {
  location: PropTypes.object,
  getBuddies: PropTypes.func,
  currentUser: PropTypes.object,
  buddyList: PropTypes.object
};