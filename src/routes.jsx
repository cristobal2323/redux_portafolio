import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/home/';
import Dashboard from './components/dashboard/';
/* Person */
import UpdatePerson from './components/dashboard/person/update_person';
import SavePerson from './components/dashboard/person/save_person';
import ListPerson from './components/dashboard/person/list_person';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/dashboard" component={Dashboard}>
    	<Route path="/dashboard/updatePerson/:id" component={UpdatePerson} />
    	<Route path="/dashboard/savePerson" component={SavePerson} />
    	<Route path="/dashboard/listPerson" component={ListPerson} />
    </Route>
  </Route>
);
