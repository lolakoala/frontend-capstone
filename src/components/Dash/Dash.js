import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Tabs, Tab } from 'material-ui';
import { Link } from 'react-router-dom';
import SearchProfessionals from '../SearchProfessionals/SearchProfessionals';


const Dash = ({
  getInsuranceList,
  getSpecialtyList
}) => {
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
            getSpecialtyList={getSpecialtyList} />
          <div>professionals</div>
        </Tab>
        <Tab label="Search Buddies">
          {/* Search Users Component Here */}
          <div>users</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dash;

Dash.propTypes = {
  getInsuranceList: PropTypes.func,
  getSpecialtyList: PropTypes.func
};
