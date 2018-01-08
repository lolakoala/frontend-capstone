import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';
import { Redirect } from 'react-router-dom';
import css from './SearchProfessionals.css';
import backend from './backend';

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

  handleSubmit = () => {
    const { searchQuery, searchTopic } = this.state;

    fetch(`${backend}/api/v1/professionals?${searchQuery}=${searchTopic}`)
      .then(res => res.json())
      .then(res => res.professionals.map(prof => {
        return {
          id: prof.id,
          name: prof.professional_name,
          // img ?
          city: prof.professional_location,
          email: prof.professional_email,
          phone: prof.professional_phone,
          insurance: prof.professional_insurance_providers,
          specialties: prof.professional_specialties
        };
      }))
      .then(res => this.props.search(res, 'profs'))
      .catch(error => { throw error; });

    return <Redirect to="/list/profSearch" />;
  }

  render() {
    const { insuranceList, specialtyList } = this.props;
    const { searchQuery, searchTopic } = this.state;

    const submitButton = <RaisedButton label="Submit" onClick={this.handleSubmit} />;

    return (
      <div className="search-options">
        <DropDownMenu value={searchQuery} onChange={this.handleQuery}>
          <MenuItem value="select query" primaryText="Select search query." />
          <MenuItem value="insurance_provider" primaryText="Search by insurance." />
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
  currentUser: PropTypes.object
};
