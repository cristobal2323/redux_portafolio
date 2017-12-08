import{
	SAVE_TIME_INIT,
	SAVE_TIME_SUCCESS,
	SAVE_TIME_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function saveTimeReducer(state = initialState.saveTime, action){
	switch(action.type){
		case SAVE_TIME_INIT :
			return{
				...state,
				loading: true,
				error: null
			};
		case SAVE_TIME_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case SAVE_TIME_SUCCESS:
			return{
				...state,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
}