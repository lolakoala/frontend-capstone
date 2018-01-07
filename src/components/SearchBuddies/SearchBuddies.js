import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';
import { Redirect } from 'react-router-dom';

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

  handleChange = (event, index, value) => this.setState({value});

  handleSubmit = () => {
    this.props.search({
      group: 'users',
      topic: this.state.value,
      city: this.props.currentUser.city
    });
    return <Redirect to="/list/buddySearch" />;
  }

  render() {
    const { allChallenges } = this.props;

    return (
      <div className="search-options">
        <DropDownMenu value={allChallenges[0]} onChange={this.handleChange}>
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
