import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/home/';
import Dashboard from './components/dashboard/';

/* Person */
import SavePerson from './components/dashboard/person/save_person';
import ListPerson from './components/dashboard/person/list_person';
import UpdatePerson from './components/dashboard/person/update_person';

/* Stack */
import SaveStack from './components/dashboard/stack/save_stack';
import ListStack from './components/dashboard/stack/list_stack';
import UpdateStack from './components/dashboard/stack/update_stack';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/dashboard" component={Dashboard}>
    	<Route path="/dashboard/savePerson" component={SavePerson} />
        <Route path="/dashboard/listPerson" component={ListPerson} />
    	<Route path="/dashboard/updatePerson/:id" component={UpdatePerson} />
    	
    	<Route path="/dashboard/saveStack" component={SaveStack} />
    	<Route path="/dashboard/listStack" component={ListStack} />
        <Route path="/dashboard/updateStack/:id" component={UpdateStack} />
    </Route>
  </Route>
);
