import{
	FETCH_PEOPLE_INIT,
	FETCH_PEOPLE_SUCCESS,
	FETCH_PEOPLE_FAILURE,
	FETCH_PEOPLE_SUCCESSMORE,
	DELETE_PERSON_INIT,
	DELETE_PERSON_SUCCESS,
	DELETE_PERSON_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function listPersonReducer(state = initialState.listPerson, action){
	switch(action.type){
		case FETCH_PEOPLE_INIT :
			return{
				...state,
				loading: true,
        		error: null,
			};
		case FETCH_PEOPLE_SUCCESS:
			return{
				...state,
				people: action.payload,
        		error: null,
        		loading: false,
			};
		case FETCH_PEOPLE_FAILURE:
			return{
				...state,
				people: [],
        		error: action.payload,
        		loading: false,
			};
		case FETCH_PEOPLE_SUCCESSMORE:
			return{
				...state,
				people: state.people.concat(action.payload),
        		error: null,
        		loading: false,
			};
		case DELETE_PERSON_INIT :
			return{
				...state,
				loading: false,
				error: null
			};
		case DELETE_PERSON_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case DELETE_PERSON_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
				people: [
	          		...state.people.slice(0, action.payload),
	          		...state.people.slice(parseInt(action.payload, 10)+ 1)
	        	],
			};
		default:
			return state;
	}
}