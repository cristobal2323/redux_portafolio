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

const rootReducer = combineReducers({
	routing: routerReducer,
	savePerson,
	listPerson,
	updatePerson,
	saveStack,
	listStack,
	updateStack,
});

export default rootReducer;