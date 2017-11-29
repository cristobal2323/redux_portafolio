import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/home/';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
