import{
	FETCH_PROJECTS_INIT,
	FETCH_PROJECTS_SUCCESS,
	FETCH_PROJECTS_FAILURE,
	FETCH_PROJECTS_SUCCESSMORE,
	DELETE_PROJECT_INIT,
	DELETE_PROJECT_SUCCESS,
	DELETE_PROJECT_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function listProjectReducer(state = initialState.listProject, action){
	switch(action.type){
		case FETCH_PROJECTS_INIT :
			return{
				...state,
				loading: true,
        		error: null,
			};
		case FETCH_PROJECTS_SUCCESS:
			return{
				...state,
				projects: action.payload,
        		error: null,
        		loading: false,
			};
		case FETCH_PROJECTS_FAILURE:
			return{
				...state,
				projects: [],
        		error: action.payload,
        		loading: false,
			};
		case FETCH_PROJECTS_SUCCESSMORE:
			return{
				...state,
				projects: state.projects.concat(action.payload),
        		error: null,
        		loading: false,
			};
		case DELETE_PROJECT_INIT :
			return{
				...state,
				loading: false,
				error: null
			};
		case DELETE_PROJECT_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case DELETE_PROJECT_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
				projects: [
	          		...state.projects.slice(0, action.payload),
	          		...state.projects.slice(parseInt(action.payload, 10)+ 1)
	        	],
			};
		default:
			return state;
	}
}