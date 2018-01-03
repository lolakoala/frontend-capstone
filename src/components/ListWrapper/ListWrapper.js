import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import BuddyList from '../BuddyList/BuddyList';
import ProfsList from '../ProfsList/ProfsList';

// possible location.pathname
// /buddies
// /buddySearch
// /preferredProfessionals
// /profsSearch

class ListWrapper extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    const { currentUser, location, getBuddies, getPreferredProfs } = this.props;

    if (location.pathname === '/buddies') {
      getBuddies(currentUser);
    }
    if (location.pathname === '/preferredProfessionals') {
      getPreferredProfs(currentUser);
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  filterList = array => {
    return array.filter(person => {
      const searchablePerson = Object.assign({}, person, { city: '' });
      const personValues = Object.values(searchablePerson);
      let isMatch = false;
      personValues.forEach(value => {
        if (value.includes(this.state.value)) {
          isMatch = true;
        }
      });
      return isMatch === true;
    });
  }

  render() {
    const { location, buddyList, currentUser, profsList } = this.props;
    const list = location.pathname === '/buddies' ? 'buddies' : 'buddy search results';
    const buddiesToRender = this.state.value ? this.filterList(buddyList) : buddyList;
    const profsToRender = this.state.value ? this.filterList(profsList) : profsList;
    const buddyComponent = <BuddyList
      buddies={buddiesToRender}
      // action to toggle favorite
      currentUser={currentUser}
    />;
    const profsComponent = <ProfsList
      profs={profsToRender}
      // action to toggle favorite
      currentUser={currentUser}
    />;

    return (
      <div>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
          hintText={`Type here to filter your ${list}.`}
        />
        {location.pathname.includes('bud') ? buddyComponent : profsComponent}
      </div>
    );
  }
}

export default ListWrapper;

ListWrapper.propTypes = {
  location: PropTypes.object,
  getBuddies: PropTypes.func,
  currentUser: PropTypes.object,
  buddyList: PropTypes.object,
  getPreferredProfs: PropTypes.func,
  profsList: PropTypes.array
};
