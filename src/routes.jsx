import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/home/';
import Dashboard from './components/dashboard/';

/* Person */
import SavePerson from './components/dashboard/person/save_person/index.jsx';
import ListPerson from './components/dashboard/person/list_person/index.jsx';
import UpdatePerson from './components/dashboard/person/update_person/index.jsx';

/* Stack */
import SaveStack from './components/dashboard/stack/save_stack/index.jsx';
import ListStack from './components/dashboard/stack/list_stack/index.jsx';
import UpdateStack from './components/dashboard/stack/update_stack/index.jsx';

/* Project */
import SaveProject from './components/dashboard/project/save_project/index.jsx';
import ListProject from './components/dashboard/project/list_project/index.jsx';
import UpdateProject from './components/dashboard/project/update_project/index.jsx';

/* Time */
import SaveTime from './components/dashboard/time/save_time/index.jsx';
import ListTime from './components/dashboard/time/list_time/index.jsx';
import UpdateTime from './components/dashboard/time/update_time/index.jsx';

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

        <Route path="/dashboard/saveProject" component={SaveProject} />
        <Route path="/dashboard/listProject" component={ListProject} />
        <Route path="/dashboard/updateProject/:id" component={UpdateProject} />

        <Route path="/dashboard/saveTimeLine" component={SaveTime} />
        <Route path="/dashboard/listTime" component={ListTime} />
        <Route path="/dashboard/updateTimeLine/:id" component={UpdateTime} />
    </Route>
  </Route>
);
