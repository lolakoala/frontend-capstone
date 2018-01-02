import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';
import { Redirect } from 'react-router-dom';

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
    const { searchResults, search, insuranceList, specialtyList, currentUser } = this.props;
    const { searchQuery, searchTopic } = this.state;

    if (searchResults.length) {
      return <Redirect to="/searchResults" />;
    }
    const submitButton = <RaisedButton label="Submit" onClick={() => search({
      group: 'professionals',
      query: searchQuery,
      topic: searchTopic,
      city: currentUser.city
    })} />;

    return (
      <div>
        <DropDownMenu value={searchQuery} onChange={this.handleQuery}>
          <MenuItem value="select query" primaryText="Select search query." />
          <MenuItem value="insurance" primaryText="Search by insurance." />
          <MenuItem value="specialty" primaryText="Search by specialty." />
        </DropDownMenu>
        {searchQuery === 'insurance' ? this.topicDropDown(insuranceList) : null}
        {searchQuery === 'specialty' ? this.topicDropDown(specialtyList) : null}
        {searchTopic ? submitButton : null}
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
  search: PropTypes.func,
  searchResults: PropTypes.array,
  currentUser: PropTypes.object
};
