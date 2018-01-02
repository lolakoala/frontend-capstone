import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Tabs, Tab } from 'material-ui';
import { Link } from 'react-router-dom';
import SearchProfessionals from '../SearchProfessionals/SearchProfessionals';

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
      searchResults
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
            {/* Search Users Component Here */}
            <div>users</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

// const Dash = ({
//   getInsuranceList,
//   getSpecialtyList,
//   insuranceList,
//   specialtyList,
//   search,
//   searchResults
// }) => {
//   return (
//     <div>
//       <Toolbar>
//         <Link to="/chat">Chat</Link>
//         <Link to="/preferredProffesionals">My Preferred Proffesionals</Link>
//         <Link to="/buddies">My Buddies</Link>
//         {/* In My Toolbox, should we add ability to add your own resources? */}
//         <Link to="/toolbox">My Toolbox</Link>
//       </Toolbar>
//       <Tabs>
//         <Tab label="Search Professionals">
//           <SearchProfessionals
//             getInsuranceList={getInsuranceList}
//             getSpecialtyList={getSpecialtyList}
//             insuranceList={insuranceList}
//             specialtyList={specialtyList}
//             search={search}
//             searchResults={searchResults}
//           />
//         </Tab>
//         <Tab label="Search Buddies">
//           {/* Search Users Component Here */}
//           <div>users</div>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// };

export default Dash;

Dash.propTypes = {
  getInsuranceList: PropTypes.func,
  getSpecialtyList: PropTypes.func,
  insuranceList: PropTypes.array,
  specialtyList: PropTypes.array,
  search: PropTypes.func,
  searchResults: PropTypes.array,
  clearSearchResults: PropTypes.func
};
