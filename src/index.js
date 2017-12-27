import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import { Provider } from 'react-redux';
import store from './reducers/configureStore.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Root store={store}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
