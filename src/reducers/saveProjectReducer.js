import{
	SAVE_PROJECT_INIT,
	SAVE_PROJECT_SUCCESS,
	SAVE_PROJECT_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function saveProjectReducer(state = initialState.saveProject, action){
	switch(action.type){
		case SAVE_PROJECT_INIT :
			return{
				...state,
				loading: true,
				error: null
			};
		case SAVE_PROJECT_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case SAVE_PROJECT_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
}