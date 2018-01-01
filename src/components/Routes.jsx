import React from 'react';
import { Route } from 'react-router-dom';
//import all containers/containerless components
import LandingPageContainer from '../containers/LandingPageContainer';
import SelectCityContainer from '../containers/SelectCityContainer';
import CreateProfileContainer from '../containers/CreateProfileContainer';

const Routes = () => {
  return (
    <div className="routes">
      {/*routes for imported components -- see below as example*/}
      {/* <Route path="/" component={ HeaderNavContainer }/> */}
      <Route exact path="/" component={ LandingPageContainer } />
      <Route exact path="/selectCity" component={ SelectCityContainer } />
      <Route exact path="/createProfile" component={ CreateProfileContainer } />
    </div>
  );

};

export default Routes;
