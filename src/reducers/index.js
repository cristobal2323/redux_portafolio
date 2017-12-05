import { combineReducers } from 'redux' ;
import { routerReducer } from 'react-router-redux';
import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

/* Person */
import savePerson from './savePersonReducer';
import listPerson from './listPersonReducer';
import updatePerson from './updatePersonReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	productList,
	activeProduct,
	cart,
	savePerson,
	listPerson,
	updatePerson,
});

export default rootReducer;