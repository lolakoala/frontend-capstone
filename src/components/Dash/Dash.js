import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Tabs, Tab } from 'material-ui';
import { Link } from 'react-router-dom';
import SearchProfessionals from '../SearchProfessionals/SearchProfessionals';
import SearchBuddies from '../SearchBuddies/SearchBuddies';

class Dash extends Component {
  componentWillMount() {
    this.props.clearSearchResults();
  }

  render() {
    const {
      getInsuranceList,
      getSpecialtyList,
      insuranceList,
      specialtyList,
      search,
      searchResults,
      allChallenges,
      getAllChallenges
    } = this.props;
    return (
      <div>
        <Toolbar>
          <Link to="/chat">Chat</Link>
          <Link to="/preferredProffesionals">My Preferred Proffesionals</Link>
          <Link to="/buddies">My Buddies</Link>
          {/* In My Toolbox, should we add ability to add your own resources? */}
          <Link to="/toolbox">My Toolbox</Link>
        </Toolbar>
        <Tabs>
          <Tab label="Search Professionals">
            <SearchProfessionals
              getInsuranceList={getInsuranceList}
              getSpecialtyList={getSpecialtyList}
              insuranceList={insuranceList}
              specialtyList={specialtyList}
              search={search}
              searchResults={searchResults}
            />
          </Tab>
          <Tab label="Search Buddies">
            <SearchBuddies
              allChallenges={allChallenges}
              getAllChallenges={getAllChallenges}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Dash;

Dash.propTypes = {
  getInsuranceList: PropTypes.func,
  getSpecialtyList: PropTypes.func,
  insuranceList: PropTypes.array,
  specialtyList: PropTypes.array,
  search: PropTypes.func,
  searchResults: PropTypes.array,
  clearSearchResults: PropTypes.func,
  allChallenges: PropTypes.array,
  getAllChallenges: PropTypes.func
};
