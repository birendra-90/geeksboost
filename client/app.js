import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
// import { ReduxRouter } from 'redux-router';
import { MuiThemeProvider } from 'material-ui/styles/MuiThemeProvider';
import routes from "./routes";
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools';

import configureStore from './store/configureStore';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router routes={routes} history={browserHistory} />
    </Provider>
  </div>,
  document.getElementById('root')
);
