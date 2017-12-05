import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_CONTACT,
  CHANGE_FORM,
  UPDATE_PERSON_SUCCESS,
  UPDATE_PERSON_FAILURE,
  UPDATE_PERSON_INIT,
  FETCH_PERSON_INIT,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAILURE,
} from './types';
import API from '../api';

/* Actions Creators */

export function changeForm(person) {
  return {
    type: CHANGE_FORM,
    payload: person,
  };
}

function fetchPersonSuccess(person) {
  return {
    type: FETCH_PERSON_SUCCESS,
    payload: person,
  };
}

function fetchPersonFailure(error) {
  return {
    type: FETCH_PERSON_FAILURE,
    payload: error,
  };
}

function fetchPersonInit(person) {
  return {
    type: FETCH_PERSON_INIT,
    payload: person,
  };
}

function updatePersonSuccess() {
  return {
    type: UPDATE_PERSON_SUCCESS,
  };
}

function updatePersonFailure(error) {
  return {
    type: UPDATE_PERSON_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function updatePerson(person, id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_PERSON_INIT,
      };
    });

    try {
      await API.person.update(person, id);
      return dispatch(updatePersonSuccess());
    } catch (error) {
      return dispatch(updatePersonFailure(error));
    }
  };
}

export function fetchPerson(id) {
  return async (dispatch) => {
    dispatch(fetchPersonInit());
    try {
      const data = await API.person.getSingle(id);
      dispatch(fetchPersonSuccess(data.person));
    } catch (error) {
      dispatch(fetchPersonFailure(error));
    }
  };
}
