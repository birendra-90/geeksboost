import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
// import Parent from '../containers/Parent';
// import ChildA from '../containers/ChildA.jsx';
// import ChildB from '../containers/ChildB.jsx';
// import GrandChildA from '../containers/GrandChildA.jsx';
// import GrandChildB from '../containers/GrandChildB.jsx';
// import NotFound from '../containers/NotFound.jsx';
import Home from './containers/Home';

export default (
  <Router>
    <Route path='/' component={Home}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
