import{
	FETCH_TIMES_INIT,
	FETCH_TIMES_SUCCESS,
	FETCH_TIMES_FAILURE,
	FETCH_TIMES_SUCCESSMORE,
	DELETE_TIME_INIT,
	DELETE_TIME_SUCCESS,
	DELETE_TIME_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function listTimeReducer(state = initialState.listTime, action){
	switch(action.type){
		case FETCH_TIMES_INIT :
			return{
				...state,
				loading: true,
        		error: null,
			};
		case FETCH_TIMES_SUCCESS:
			return{
				...state,
				times: action.payload,
        		error: null,
        		loading: false,
			};
		case FETCH_TIMES_FAILURE:
			return{
				...state,
				times: [],
        		error: action.payload,
        		loading: false,
			};
		case FETCH_TIMES_SUCCESSMORE:
			return{
				...state,
				times: state.times.concat(action.payload),
        		error: null,
        		loading: false,
			};
		case DELETE_TIME_INIT :
			return{
				...state,
				loading: false,
				error: null
			};
		case DELETE_TIME_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case DELETE_TIME_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
				times: [
	          		...state.times.slice(0, action.payload),
	          		...state.times.slice(parseInt(action.payload, 10)+ 1)
	        	],
			};
		default:
			return state;
	}
}