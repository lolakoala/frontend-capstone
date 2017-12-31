import React from 'react';
import { Route } from 'react-router-dom';
//import all containers/containerless components
import LandingPageContainer from '../containers/LandingPageContainer';

const Routes = () => {
  return (
    <div className="routes">
      {/*routes for imported components -- see below as example*/}
      {/* <Route path="/" component={ HeaderNavContainer }/> */}
      <Route path="/" component={ LandingPageContainer } />
    </div>
  );

};

export default Routes;
