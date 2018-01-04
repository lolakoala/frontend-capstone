import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import BuddyList from '../BuddyList/BuddyList';
import ProfsList from '../ProfsList/ProfsList';

class ListWrapper extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      list: [],
      listName: ''
    };
  }

  componentWillMount() {
    const { currentUser, getBuddies, getPreferredProfs } = this.props;
    getBuddies(currentUser);
    getPreferredProfs(currentUser);
  }

  componentDidMount() {
    const {
      location,
      buddySearch,
      profSearch,
      userBuddies,
      userProfs
    } = this.props;
    let list;
    let listName;

    switch (location.pathname) {
    case '/listUserBuddies':
      list = userBuddies;
      listName = 'buddies';
      break;
    case '/listUserProfs':
      list = userProfs;
      listName = 'preferred professionals';
      break;
    case '/listProfSearch':
      list = profSearch;
      listName = 'professionals search results';
      break;
    case '/listBuddySearch':
      list = buddySearch;
      listName = 'buddy search results';
      break;
    default:
      list = [];
    }

    return this.setState({ list, listName });
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
    const { location, currentUser, toggleFavorite, userBuddies, userProfs } = this.props;
    const listToRender = this.state.value ? this.filterList(this.state.list) : this.state.list;
    const buddyComponent = <BuddyList
      buddies={listToRender}
      faves={userBuddies}
      toggleFavorite={toggleFavorite}
      currentUser={currentUser}
    />;
    const profsComponent = <ProfsList
      profs={listToRender}
      faves={userProfs}
      toggleFavorite={toggleFavorite}
      currentUser={currentUser}
    />;

    return (
      <div>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
          hintText={`Type here to filter your ${this.state.listName}.`}
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
  buddySearch: PropTypes.object,
  getPreferredProfs: PropTypes.func,
  profSearch: PropTypes.array,
  toggleFavorite: PropTypes.func,
  userBuddies: PropTypes.array,
  userProfs: PropTypes.array
};
