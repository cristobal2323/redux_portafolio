import{
	FETCH_STACKS_INIT,
	FETCH_STACKS_SUCCESS,
	FETCH_STACKS_FAILURE,
	FETCH_STACKS_SUCCESSMORE,
	DELETE_STACK_INIT,
	DELETE_STACK_SUCCESS,
	DELETE_STACK_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function listPersonReducer(state = initialState.listStack, action){
	switch(action.type){
		case FETCH_STACKS_INIT :
			return{
				...state,
				loading: true,
        		error: null,
			};
		case FETCH_STACKS_SUCCESS:
			return{
				...state,
				stacks: action.payload,
        		error: null,
        		loading: false,
			};
		case FETCH_STACKS_FAILURE:
			return{
				...state,
				stacks: [],
        		error: action.payload,
        		loading: false,
			};
		case FETCH_STACKS_SUCCESSMORE:
			return{
				...state,
				stacks: state.stacks.concat(action.payload),
        		error: null,
        		loading: false,
			};
		case DELETE_STACK_INIT :
			return{
				...state,
				loading: false,
				error: null
			};
		case DELETE_STACK_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case DELETE_STACK_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
				stacks: [
	          		...state.stacks.slice(0, action.payload),
	          		...state.stacks.slice(parseInt(action.payload, 10)+ 1)
	        	],
			};
		default:
			return state;
	}
}