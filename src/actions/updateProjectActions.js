import {
  CHANGE_FORM,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  UPDATE_PROJECT_INIT,
  FETCH_PROJECT_INIT,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE,
} from './types';
import API from '../api';

/* Actions Creators */

export function changeForm(project) {
  return {
    type: CHANGE_FORM,
    payload: project,
  };
}

function fetchProjectSuccess(project) {
  return {
    type: FETCH_PROJECT_SUCCESS,
    payload: project,
  };
}

function fetchProjectFailure(error) {
  return {
    type: FETCH_PROJECT_FAILURE,
    payload: error,
  };
}

function fetchProjectInit(project) {
  return {
    type: FETCH_PROJECT_INIT,
    payload: project,
  };
}

function updateProjectSuccess() {
  return {
    type: UPDATE_PROJECT_SUCCESS,
  };
}

function updateProjectFailure(error) {
  return {
    type: UPDATE_PROJECT_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function updateProject(project, id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_PROJECT_INIT,
      };
    });

    try {
      await API.project.update(project, id);
      return dispatch(updateProjectSuccess());
    } catch (error) {
      return dispatch(updateProjectFailure(error));
    }
  };
}

export function fetchProject(id) {
  return async (dispatch) => {
    dispatch(fetchProjectInit());
    try {
      const data = await API.project.getSingle(id);
      dispatch(fetchProjectSuccess(data.project));
    } catch (error) {
      dispatch(fetchProjectFailure(error));
    }
  };
}
