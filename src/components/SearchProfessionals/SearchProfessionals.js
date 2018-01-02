import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem } from 'material-ui';

class SearchProfessionals extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: 'insurance',
      searchTopic: ''
    };
  }

  componentWillMount() {
    this.props.getInsuranceList();
    this.props.getSpecialtyList()
  }

  handleQuery = (event, index, value) => this.setState({ searchQuery: value });

  render() {
    const insuranceList

    return (
      <div>
        <DropDownMenu value={this.state.searchQuery} onChange={this.handleQuery}>
          <MenuItem value="select query" primaryText="Select search query." />
          <MenuItem value="insurance" primaryText="Search by insurance." />
          <MenuItem value="specialty" primaryText="Search by specialty." />
        </DropDownMenu>
        {this.state.value === 'insurance' ? insuranceList : null}
        {this.state.value === 'specialty' ? specialtyList : null}
        {this.state.searchTopic ? submitButton : null}
      </div>
    );
  }
}

export default SearchProfessionals;

SearchProfessionals.propTypes = {
  getInsuranceList: PropTypes.func,
  getSpecialtyList: PropTypes.func
};
