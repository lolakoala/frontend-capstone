import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';
import { Redirect } from 'react-router-dom';
import backend from './backend';

class SearchBuddies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    this.props.getAllChallenges();
  }

  componentWillReceiveProps = nextProps => {
    this.setState({ value: nextProps.allChallenges[0] });
  }

  handleChange = (event, index, value) => { console.log('in handlechange'); this.setState({value}); }

  handleSubmit = () => {
    const challenge = this.state.value;

    fetch(`${backend}/api/v1/users?user_challenge=${challenge}`)
      .then(res => res.json())
      .then(res => res.users.map(user => {
        return {
          id: user.id,
          userName: user.user_name,
          // img
          aboutMe: user.user_about,
          city: user.user_location,
          email: user.user_email
        };
      }))
      .then(res => this.props.search(res, 'buddies'))
      .catch(error => { throw error; });
    return <Redirect to="/list/buddySearch" />;
  }

  render() {
    const { allChallenges } = this.props;

    return (
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
    );
  }
}

export default SearchBuddies;

SearchBuddies.propTypes = {
  allChallenges: PropTypes.array,
  getAllChallenges: PropTypes.func,
  search: PropTypes.func,
  currentUser: PropTypes.object
};
