import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem } from 'material-ui';

class SearchProfessionals extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: 'select query',
      searchTopic: ''
    };
  }

  componentWillMount() {
    this.props.getInsuranceList();
    this.props.getSpecialtyList();
  }

  handleQuery = (event, index, value) => this.setState({
    searchQuery: value,
    searchTopic: ''
  });

  handleSearchTopic = (event, index, value) => this.setState({ searchTopic: value });

  render() {
    const insuranceDropDown = <DropDownMenu value={this.state.searchTopic} onChange={this.handleSearchTopic}>
      {this.props.insuranceList.map((ins, index) => {
        return <MenuItem value={ins} primaryText={ins} key={`${ins}${index}`}/>;
      })}
    </DropDownMenu>;

    const specialtyDropDown = <DropDownMenu value={this.state.searchTopic} onChange={this.handleSearchTopic}>
      {this.props.specialtyList.map((specialty, index) => {
        return <MenuItem value={specialty} primaryText={specialty} key={`${specialty}${index}`}/>;
      })}
    </DropDownMenu>;

    return (
      <div>
        <DropDownMenu value={this.state.searchQuery} onChange={this.handleQuery}>
          <MenuItem value="select query" primaryText="Select search query." />
          <MenuItem value="insurance" primaryText="Search by insurance." />
          <MenuItem value="specialty" primaryText="Search by specialty." />
        </DropDownMenu>
        {this.state.value === 'insurance' ? insuranceDropDown : null}
        {this.state.value === 'specialty' ? specialtyDropDown : null}
        {this.state.searchTopic ? submitButton : null}
      </div>
    );
  }
}

export default SearchProfessionals;

SearchProfessionals.propTypes = {
  getInsuranceList: PropTypes.func,
  getSpecialtyList: PropTypes.func,
  insuranceList: PropTypes.array,
  specialtyList: PropTypes.array
};
