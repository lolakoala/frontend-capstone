import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

class BuddyListWrapper extends Component {
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

  filterBuddies = () => {
    return this.props.buddyList.filter(buddy => {
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
  }

  render() {
    const { location, buddyList } = this.props;
    const list = location.pathname === '/buddies' ? 'buddies' : 'buddy search results';
    const buddiesToRender = this.state.value ? this.filterBuddies() : buddyList;

    return (
      <div>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
          hintText={`Type here to filter your ${list}.`}
        />
        {/* list of buddies from buddiesToRender, must be able to favorite- will be it's own component */}
      </div>
    );
  }
}

export default BuddyListWrapper;

BuddyListWrapper.propTypes = {
  location: PropTypes.object,
  getBuddies: PropTypes.func,
  currentUser: PropTypes.object,
  buddyList: PropTypes.object
};
