import {
  SAVE_PERSON_SUCCESS,
  SAVE_PERSON_FAILURE,
  SAVE_PERSON_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function savePersonSuccess() {
  return {
    type: SAVE_PERSON_SUCCESS,
  };
}

function savePersonFailure(error) {
  return {
    type: SAVE_PERSON_FAILURE,
    payload: error,
  };
}

function savePersonInit() {
  return {
    type: SAVE_PERSON_INIT,
  };
}

// Actions Creators (Async)

export function savePerson(person) {
  return async (dispatch) => {
    dispatch(savePersonInit());
    try {
      await API.person.save(person);
      return dispatch(savePersonSuccess());
    } catch (error) {
      return dispatch(savePersonFailure(error));
    }
  };
}
