import{
	SAVE_PERSON_INIT,
	SAVE_PERSON_SUCCESS,
	SAVE_PERSON_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function savePersonReducer(state = initialState.savePerson, action){
	switch(action.type){
		case SAVE_PERSON_INIT :
			return{
				...state,
				loading: true,
				error: null
			};
		case SAVE_PERSON_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case SAVE_PERSON_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
}