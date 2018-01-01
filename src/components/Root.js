import React, {Component} from 'react';
import Routes from './Routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import DevTools from '../containers/DevTools';
import {
// import any colors to use to change theme style
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  // change theme style here
});

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Routes />
          </MuiThemeProvider>
          {/*Below are Redux devtools. Uncomment to use.*/}
          <DevTools />
        </div>
      </BrowserRouter>
    );
  }
}
