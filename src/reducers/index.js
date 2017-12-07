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
});

export default rootReducer;