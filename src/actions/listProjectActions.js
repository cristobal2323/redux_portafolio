import {
  FETCH_PROJECTS_INIT,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECTS_SUCCESSMORE,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function fetchProjectsSuccess(project) {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: project,
  };
}

function fetchProjectsFailure(error) {
  return {
    type: FETCH_PROJECTS_FAILURE,
    payload: error,
  };
}

function fetchProjectsInit() {
  return {
    type: FETCH_PROJECTS_INIT,
  };
}

function fetchProjectsSuccessMore(project) {
  return {
    type: FETCH_PROJECTS_SUCCESSMORE,
    payload: project,
  };
}

function deleteProjectSuccess(num) {
  return {
    type: DELETE_PROJECT_SUCCESS,
    payload: num,
  };
}

function deleteProjectFailure(error) {
  return {
    type: DELETE_PROJECT_FAILURE,
    payload: error,
  };
}

function deleteProjectInit() {
  return {
    type: DELETE_PROJECT_INIT,
  };
}

// Actions Creators (Async)

export function fetchProjects(project) {
  return async (dispatch) => {
    dispatch(fetchProjectsInit());
    try {
      const data = await API.project.getAll(project);
      dispatch(fetchProjectsSuccess(data.projects));
    } catch (error) {
      dispatch(fetchProjectsFailure(error));
    }
  };
}

export function fetchProjectsMore(project) {
  return async (dispatch) => {
    dispatch(fetchProjectsInit());
    try {
      const data = await API.project.getAll(project);
      dispatch(fetchProjectsSuccessMore(data.projects));
    } catch (error) {
      dispatch(fetchProjectsFailure(error));
    }
  };
}


export function deleteProject(id,num) {
  return async (dispatch) => {
    dispatch(deleteProjectInit());
    try {
      await API.project.delete(id);
      return dispatch(deleteProjectSuccess(num));
    } catch (error) {
      return dispatch(deleteProjectFailure(error));
    }
  };
}
