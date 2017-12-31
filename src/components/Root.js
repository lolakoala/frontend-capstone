import React, {Component} from 'react';
import Routes from './Routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import DevTools from '../containers/DevTools';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes />
          {/*Below are Redux devtools. Uncomment to use.*/}
          {/* <DevTools /> */}
        </div>
      </BrowserRouter>
    );
  }
}
