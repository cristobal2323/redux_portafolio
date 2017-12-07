import {
  SAVE_PROJECT_SUCCESS,
  SAVE_PROJECT_FAILURE,
  SAVE_PROJECT_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function saveProjectSuccess() {
  return {
    type: SAVE_PROJECT_SUCCESS,
  };
}

function saveProjectFailure(error) {
  return {
    type: SAVE_PROJECT_FAILURE,
    payload: error,
  };
}

function saveProjectInit() {
  return {
    type: SAVE_PROJECT_INIT,
  };
}

// Actions Creators (Async)

export function saveProject(project) {
  return async (dispatch) => {
    dispatch(saveProjectInit());
    try {
      await API.project.save(project);
      return dispatch(saveProjectSuccess());
    } catch (error) {
      return dispatch(saveProjectFailure(error));
    }
  };
}
