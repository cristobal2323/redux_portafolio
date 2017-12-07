import{
  CHANGE_FORM,
  UPDATE_PROJECT_INIT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  FETCH_PROJECT_INIT,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function updateProjectReducer(state = initialState.updateProject, action) {
  switch (action.type) {
    case FETCH_PROJECT_INIT:
      return{
        ...state,
        loading: true,
        error: null,
        project: false,
      };
    case FETCH_PROJECT_SUCCESS:
      return{
        ...state,
        project: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_PROJECT_FAILURE:
      return{
        ...state,
        project: [],
        error: action.payload,
        loading: false,
      };
    case UPDATE_PROJECT_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_PROJECT_FAILURE:
      return{
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_PROJECT_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
      };
    case CHANGE_FORM: {
      return{
        ...state,
        project: JSON.parse(action.payload),
      };
    }
    default:
      return state;
  }
}
