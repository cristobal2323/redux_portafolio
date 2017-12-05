import{
	FETCH_PEOPLE_INIT,
	FETCH_PEOPLE_SUCCESS,
	FETCH_PEOPLE_FAILURE,
	FETCH_PEOPLE_SUCCESSMORE,
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
		default:
			return state;
	}
}