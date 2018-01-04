import React from 'react';
import { Route } from 'react-router-dom';
import LandingPageContainer from '../containers/LandingPageContainer';
import SelectCityContainer from '../containers/SelectCityContainer';
import CreateProfileContainer from '../containers/CreateProfileContainer';
import PersistedContainer from '../containers/PersistedContainer';
import DashContainer from '../containers/DashContainer';
import ListContainer from '../containers/ListContainer';
import Toolbox from './Toolbox/Toolbox';


const Routes = () => {
  return (
    <div className="routes">
      <Route path="/" component={ PersistedContainer } />
      <Route exact path="/" component={ LandingPageContainer } />
      <Route exact path="/selectCity" component={ SelectCityContainer } />
      <Route exact path="/createProfile" component={ CreateProfileContainer } />
      <Route exact path="/dash" component={ DashContainer } />
      <Route path="/list" component={ ListContainer } />
      <Route exact path = "/toolbox" component={ Toolbox } />
    </div>
  );

};

export default Routes;
