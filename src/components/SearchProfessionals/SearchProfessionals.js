import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';

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
    // const insuranceDropDown = <DropDownMenu value={this.state.searchTopic} onChange={this.handleSearchTopic}>
    //   {this.props.insuranceList.map((ins, index) => {
    //     return <MenuItem value={ins} primaryText={ins} key={`${ins}${index}`}/>;
    //   })}
    // </DropDownMenu>;
    //
    // const specialtyDropDown = <DropDownMenu value={this.state.searchTopic} onChange={this.handleSearchTopic}>
    //   {this.props.specialtyList.map((specialty, index) => {
    //     return <MenuItem value={specialty} primaryText={specialty} key={`${specialty}${index}`}/>;
    //   })}
    // </DropDownMenu>;

    const topicDropDown = list => {
      return <DropDownMenu value={this.state.searchTopic} onChange={this.handleSearchTopic}>
        {list.map((elem, index) => {
          return <MenuItem value={elem} primaryText={elem} key={`${elem}${index}`}/>;
        })}
      </DropDownMenu>;
    };

    const submitButton = <RaisedButton label="Submit" onClick={() => this.props.search({
      group: 'professionals',
      query: this.state.searchQuery,
      topic: this.state.searchTopic
    })} />;

    return (
      <div>
        <DropDownMenu value={this.state.searchQuery} onChange={this.handleQuery}>
          <MenuItem value="select query" primaryText="Select search query." />
          <MenuItem value="insurance" primaryText="Search by insurance." />
          <MenuItem value="specialty" primaryText="Search by specialty." />
        </DropDownMenu>
        {this.state.value === 'insurance' ? topicDropDown(this.props.insuranceList) : null}
        {this.state.value === 'specialty' ? topicDropDown(this.props.specialtyList) : null}
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
  specialtyList: PropTypes.array,
  search: PropTypes.func
};
