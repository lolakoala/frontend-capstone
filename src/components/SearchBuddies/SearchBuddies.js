import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';
import { Redirect } from 'react-router-dom';
import backend from '../../utils/backend';
import css from './SearchBuddies.css';

class SearchBuddies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searched: false
    };
  }

  componentWillMount() {
    this.props.getAllChallenges();
  }

  componentWillReceiveProps = nextProps => {
    this.setState({ value: nextProps.allChallenges[0] });
  }

  handleChange = (event, index, value) => this.setState({value});

  handleSubmit = () => {
    const challenge = this.state.value;
    const { currentUser, search } = this.props;

    fetch(`${backend}/api/v1/users?user_challenge=${challenge}`)
      .then(res => res.json())
      .then(res => res.users.map(user => {
        return {
          id: user.id,
          userName: user.user_name,
          aboutMe: user.user_about,
          city: user.user_location,
          email: user.user_email
        };
      }))
      .then(res => res.filter(user => user.id !== currentUser.id))
      .then(res => search(res, 'buddies'))
      .catch(error => { throw error; });
    this.setState({ searched: true });
  }

  render() {
    let searchResults = true;
    if (this.props.buddySearch.length) {
      this.props.pushHistory('/list/buddySearch');
    } else if (this.state.searched){
      searchResults = false;
    }
    const { allChallenges } = this.props;

    return (
      <div className='search-buddies'>
        <div className="search-options">
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            {allChallenges.map((challenge, index) => {
              return <MenuItem
                value={challenge}
                primaryText={challenge}
                key={`${challenge}${index}`}
              />;
            })}
          </DropDownMenu>
          <RaisedButton label="Submit" onClick={this.handleSubmit} />
        </div>
        <p>{!searchResults && this.state.searched ? 'There are no results for that search.': null}</p>
      </div>
    );
  }
}

export default SearchBuddies;

SearchBuddies.propTypes = {
  allChallenges: PropTypes.array,
  getAllChallenges: PropTypes.func,
  search: PropTypes.func,
  currentUser: PropTypes.object,
  buddySearch: PropTypes.array,
  pushHistory: PropTypes.func
};
