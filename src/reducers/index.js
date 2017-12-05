import { combineReducers } from 'redux' ;
import { routerReducer } from 'react-router-redux';
import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

/* Person */
import savePerson from './savePersonReducer';
import listPerson from './listPersonReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	productList,
	activeProduct,
	cart,
	savePerson,
	listPerson
});

export default rootReducer;