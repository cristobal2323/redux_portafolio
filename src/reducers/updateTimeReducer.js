import{
  CHANGE_FORM,
  UPDATE_TIME_INIT,
  UPDATE_TIME_SUCCESS,
  UPDATE_TIME_FAILURE,
  FETCH_TIME_INIT,
  FETCH_TIME_SUCCESS,
  FETCH_TIME_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function updateTimeReducer(state = initialState.updateTime, action) {
  switch (action.type) {
    case FETCH_TIME_INIT:
      return{
        ...state,
        loading: true,
        error: null,
        time: false,
      };
    case FETCH_TIME_SUCCESS:
      return{
        ...state,
        time: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_TIME_FAILURE:
      return{
        ...state,
        time: [],
        error: action.payload,
        loading: false,
      };
    case UPDATE_TIME_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_TIME_FAILURE:
      return{
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_TIME_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
      };
    case CHANGE_FORM: {
      return{
        ...state,
        time: JSON.parse(action.payload),
      };
    }
    default:
      return state;
  }
}
