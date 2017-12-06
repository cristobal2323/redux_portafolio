import{
	SAVE_STACK_INIT,
	SAVE_STACK_SUCCESS,
	SAVE_STACK_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function saveStackReducer(state = initialState.saveStack, action){
	switch(action.type){
		case SAVE_STACK_INIT :
			return{
				...state,
				loading: true,
				error: null
			};
		case SAVE_STACK_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case SAVE_STACK_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
}