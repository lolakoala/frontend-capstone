import React, {Component} from 'react';
import Routes from './Routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import DevTools from '../containers/DevTools';
import {
// import any colors to use to change theme style
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme({
  // change theme style here
  palette: {
    primary1Color: '#2F9C95',
    primary2Color: '#315659',
    primary3Color: '#BCAB79',
    accent1Color: '#315659',
    accent2Color: '#BCAB79',
    accent3Color: '#BCAB79',
    textColor: '#253031',
    alternateTextColor: '#E4EAF5',
    canvasColor: '#E4EAF5',
    borderColor: '#BCAB79',
    disabledColor: fade('#253031', 0.3),
    pickerHeaderColor: '#2F9C95',
    clockCircleColor: fade('#253031', 0.07),
    shadowColor: '#253031'
  }
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
          {/* <DevTools /> */}
        </div>
      </BrowserRouter>
    );
  }
}
