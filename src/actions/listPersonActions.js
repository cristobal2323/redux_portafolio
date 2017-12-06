import {
  FETCH_PEOPLE_INIT,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESSMORE,
  DELETE_PERSON_SUCCESS,
  DELETE_PERSON_FAILURE,
  DELETE_PERSON_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function fetchPeopleSuccess(people) {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    payload: people,
  };
}

function fetchPeopleFailure(error) {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error,
  };
}

function fetchPeopleInit() {
  return {
    type: FETCH_PEOPLE_INIT,
  };
}

function fetchPeopleSuccessMore(people) {
  return {
    type: FETCH_PEOPLE_SUCCESSMORE,
    payload: people,
  };
}

function deletePersonSuccess(num) {
  return {
    type: DELETE_PERSON_SUCCESS,
    payload: num,
  };
}

function deletePersonFailure(error) {
  return {
    type: DELETE_PERSON_FAILURE,
    payload: error,
  };
}

function deletePersonInit() {
  return {
    type: DELETE_PERSON_INIT,
  };
}

// Actions Creators (Async)

export function fetchPeople(people) {
  return async (dispatch) => {
    dispatch(fetchPeopleInit());
    try {
      const data = await API.person.getAll(people);
      dispatch(fetchPeopleSuccess(data.people));
    } catch (error) {
      dispatch(fetchPeopleFailure(error));
    }
  };
}

export function fetchPeopleMore(people) {
  return async (dispatch) => {
    dispatch(fetchPeopleInit());
    try {
      const data = await API.person.getAll(people);
      dispatch(fetchPeopleSuccessMore(data.people));
    } catch (error) {
      dispatch(fetchPeopleFailure(error));
    }
  };
}


export function deletePerson(id,num) {
  return async (dispatch) => {
    dispatch(deletePersonInit());
    try {
      await API.person.delete(id);
      return dispatch(deletePersonSuccess(num));
    } catch (error) {
      return dispatch(deletePersonFailure(error));
    }
  };
}
