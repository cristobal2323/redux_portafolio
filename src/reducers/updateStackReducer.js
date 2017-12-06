import{
  CHANGE_FORM,
  UPDATE_STACK_INIT,
  UPDATE_STACK_SUCCESS,
  UPDATE_STACK_FAILURE,
  FETCH_STACK_INIT,
  FETCH_STACK_SUCCESS,
  FETCH_STACK_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function updateSTACKReducer(state = initialState.updateStack, action) {
  switch (action.type) {
    case FETCH_STACK_INIT:
      return{
        ...state,
        loading: true,
        error: null,
        stack: false,
      };
    case FETCH_STACK_SUCCESS:
      return{
        ...state,
        stack: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_STACK_FAILURE:
      return{
        ...state,
        stack: [],
        error: action.payload,
        loading: false,
      };
    case UPDATE_STACK_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_STACK_FAILURE:
      return{
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_STACK_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
      };
    case CHANGE_FORM: {
      return{
        ...state,
        stack: JSON.parse(action.payload),
      };
    }
    default:
      return state;
  }
}
