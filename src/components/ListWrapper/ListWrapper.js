import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import BuddyList from '../BuddyList/BuddyList';
import ProfsList from '../ProfsList/ProfsList';
import backend from '../../utils/backend';

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
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return { favoriteUsers: [] };
        }
      })
      .then(res => res.favoriteUsers.map(user => {
        return {
          userName: user.user_name,
          // img
          aboutMe: user.user_about,
          city: user.user_location,
          id: user.id
        };
      }))
      .then(res => getBuddies(res))
      .catch(error => { throw error; });

    fetch(`${backend}/api/v1/favoriteProfessionals/${currentUser.id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return { favoriteProfessionals: [] };
        }
      })
      .then(res => res.favoriteProfessionals.map(prof => {
        return {
          id: prof.id,
          name: prof.professional_name,
          // img ?
          city: prof.professional_location,
          email: prof.professional_email,
          phone: prof.professional_phone,
          insurance: prof.professional_insurance_providers,
          specialties: prof.professional_specialties
        };
      }))
      .then(res => getPreferredProfs(res))
      .catch(error => { throw error; });
  }

  checkPath(nextProps) {
    const {
      location,
      buddySearch,
      profSearch,
      userBuddies,
      userProfs
    } = nextProps;
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

  componentWillReceiveProps = nextProps => {
    this.checkPath(nextProps);
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  // We're not filtering right now

  // filterList = array => {
  //   return array.filter(person => {
  //     const searchablePerson = Object.assign({}, person, { city: '' });
  //     const personValues = Object.keys(searchablePerson).map(key => {
  //       return searchablePerson[key];
  //     });
  //     let isMatch = false;
  //     personValues.forEach(value => {
  //       if (value.includes(this.state.value)) {
  //         isMatch = true;
  //       }
  //     });
  //     return isMatch === true;
  //   });
  // }

  render() {
    const { location, currentUser, toggleFavorite, userBuddies, userProfs } = this.props;
    const listToRender = this.state.value ? this.filterList(this.state.list) : this.state.list;
    const noFaveBuddies = (this.state.list === userBuddies) && !userBuddies.length;
    const buddyListComponent = <BuddyList
      buddies={listToRender}
      faves={userBuddies}
      toggleFavorite={toggleFavorite}
      currentUser={currentUser}
    />;
    const buddyComponent = noFaveBuddies ? <p>You currently have no buddies favorited.</p> : buddyListComponent;
    const noFaveProfs = (this.state.list === userProfs) && !userProfs.length;
    const profsListComponent = <ProfsList
      profs={listToRender}
      faves={userProfs}
      toggleFavorite={toggleFavorite}
      currentUser={currentUser}
    />;
    const profsComponent = noFaveProfs ? <p>You currently have no professionals favorited.</p> : profsListComponent;

    return (
      <div>
        {/* <TextField
          value={this.state.value}
          onChange={this.handleChange}
          hintText={`Type here to filter your ${this.state.listName}.`}
        /> */}
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
