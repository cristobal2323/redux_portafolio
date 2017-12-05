import{
  CHANGE_FORM,
  UPDATE_PERSON_INIT,
  UPDATE_PERSON_SUCCESS,
  UPDATE_PERSON_FAILURE,
  FETCH_PERSON_INIT,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function updatePersonReducer(state = initialState.updatePerson, action) {
  switch (action.type) {
    case FETCH_PERSON_INIT:
      return{
        ...state,
        loading: true,
        error: null,
        person: false,
      };
    case FETCH_PERSON_SUCCESS:
      return{
        ...state,
        person: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_PERSON_FAILURE:
      return{
        ...state,
        person: [],
        error: action.payload,
        loading: false,
      };
    case UPDATE_PERSON_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_PERSON_FAILURE:
      return{
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_PERSON_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
      };
    case CHANGE_FORM: {
      return{
        ...state,
        person: JSON.parse(action.payload),
      };
    }
    default:
      return state;
  }
}
