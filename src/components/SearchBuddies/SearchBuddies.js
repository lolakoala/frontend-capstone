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
    return (
      <div>
        <DropDownMenu value={this.props.allChallenges[0]} onChange={this.handleChange}>
          {this.props.allChallenges.map((challenge, index) => {
            return <MenuItem
              value={challenge}
              primaryText={challenge}
              key={`${challenge}${index}`}
            />;
          })}
        </DropDownMenu>
      </div>
    );
  }
}

export default SearchBuddies;

SearchBuddies.propTypes = {
  allChallenges: PropTypes.array,
  getAllChallenges: PropTypes.func
};
