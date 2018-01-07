import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import BuddyList from '../BuddyList/BuddyList';
import ProfsList from '../ProfsList/ProfsList';
import backend from './backend';

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

    fetch(`${backend}/api/v1/favoriteUsers/${currentUser.id}`)
      .then(res => res.json())
      .then(res => getBuddies(res.favoriteUsers.map(user => {
        return {
          userName: user.user_name,
          // img
          aboutMe: user.user_about,
          city: user.user_location,
          id: user.id
        };
      })))
      .catch(error => { throw error; });

    fetch(`${backend}/api/v1/favoriteProfessionals/${currentUser.id}`)
      .then(res => res.json())
      .then(res => getPreferredProfs(res.favoriteProfessionals.map(prof => {
        return {
          id: prof.id,
          name: prof.professional_name,
          // img ?
          city: prof.professional_location,
          email: prof.professional_email,
          phone: prof.professional_phone
        };
      })))
      .catch(error => { throw error; });
  }

  checkPath() {
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
    case '/list/userBuddies':
      list = userBuddies;
      listName = 'buddies';
      break;
    case '/list/userProfs':
      list = userProfs;
      listName = 'preferred professionals';
      break;
    case '/list/profSearch':
      list = profSearch;
      listName = 'professionals search results';
      break;
    case '/list/buddySearch':
      list = buddySearch;
      listName = 'buddy search results';
      break;
    default:
      list = [];
    }

    return this.setState({ list, listName });
  }

  componentWillReceiveProps = () => {
    this.checkPath();
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  filterList = array => {
    return array.filter(person => {
      const searchablePerson = Object.assign({}, person, { city: '' });
      const personValues = Object.keys(searchablePerson).map(key => {
        return searchablePerson[key];
      });
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
    // console.log(location.pathname.toLowerCase().includes('bud'));
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
        {location.pathname.toLowerCase().includes('bud') ? buddyComponent : profsComponent}
      </div>
    );
  }
}

export default ListWrapper;

ListWrapper.propTypes = {
  location: PropTypes.object,
  getBuddies: PropTypes.func,
  currentUser: PropTypes.object,
  buddySearch: PropTypes.array,
  getPreferredProfs: PropTypes.func,
  profSearch: PropTypes.array,
  toggleFavorite: PropTypes.func,
  userBuddies: PropTypes.array,
  userProfs: PropTypes.array
};
