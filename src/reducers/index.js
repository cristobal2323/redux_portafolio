import { combineReducers } from 'redux' ;
import { routerReducer } from 'react-router-redux';

/* Person */
import savePerson from './savePersonReducer';
import listPerson from './listPersonReducer';
import updatePerson from './updatePersonReducer';

/* Stack */
import saveStack from './saveStackReducer';
import listStack from './listStackReducer';
import updateStack from './updateStackReducer';

/* Project */
import saveProject from './saveProjectReducer';
import listProject from './listProjectReducer';
import updateProject from './updateProjectReducer';

/* Time */
import saveTime from './saveTimeReducer';
import listTime from './listTimeReducer';
import updateTime from './updateTimeReducer';

/* Home */
import home from './homeReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	savePerson,
	listPerson,
	updatePerson,
	saveStack,
	listStack,
	updateStack,
	saveProject,
	listProject,
	updateProject,
	saveTime,
	listTime,
	updateTime,
	home,
});

export default rootReducer;