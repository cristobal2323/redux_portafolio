import { combineReducers } from 'redux' ;
import { routerReducer } from 'react-router-redux';
import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';
import savePerson from './savePersonReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	productList,
	activeProduct,
	cart,
	savePerson
});

export default rootReducer;