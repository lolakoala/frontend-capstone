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

  render() {
    const { searchResults, allChallenges, search } = this.props;

    if (searchResults.length) {
      return <Redirect to="/searchResults" />;
    }
    return (
      <div>
        <DropDownMenu value={allChallenges[0]} onChange={this.handleChange}>
          {allChallenges.map((challenge, index) => {
            return <MenuItem
              value={challenge}
              primaryText={challenge}
              key={`${challenge}${index}`}
            />;
          })}
        </DropDownMenu>
        <RaisedButton label="Submit" onClick={() => search({
          group: 'users',
          topic: this.state.value
        })} />
      </div>
    );
  }
}

export default SearchBuddies;

SearchBuddies.propTypes = {
  allChallenges: PropTypes.array,
  getAllChallenges: PropTypes.func,
  searchResults: PropTypes.array,
  search: PropTypes.func
};
