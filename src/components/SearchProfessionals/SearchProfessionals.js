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

  handleQuery = (event, index, value) => {
    let searchTopic;

    if (value === 'insurance') {
      searchTopic = this.props.insuranceList[0];
    }
    if (value === 'specialty') {
      searchTopic = this.props.specialtyList[0];
    }
    this.setState({
      searchQuery: value,
      searchTopic
    });
  };

  handleSearchTopic = (event, index, value) => this.setState({ searchTopic: value });

  topicDropDown = list => {
    const menuItems = list.map((elem, index) => {
      return <MenuItem value={elem} primaryText={elem} key={`${elem}${index}`}/>;
    });
    return (
      <DropDownMenu value={this.state.searchTopic} onChange={this.handleSearchTopic}>
        {menuItems}
      </DropDownMenu>
    );
  };

  render() {
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
        {this.state.searchQuery === 'insurance' ? this.topicDropDown(this.props.insuranceList) : null}
        {this.state.searchQuery === 'specialty' ? this.topicDropDown(this.props.specialtyList) : null}
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
