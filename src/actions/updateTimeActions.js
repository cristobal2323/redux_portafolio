import {
  CHANGE_FORM,
  UPDATE_TIME_SUCCESS,
  UPDATE_TIME_FAILURE,
  UPDATE_TIME_INIT,
  FETCH_TIME_INIT,
  FETCH_TIME_SUCCESS,
  FETCH_TIME_FAILURE,
} from './types';
import API from '../api';

/* Actions Creators */

export function changeForm(time) {
  return {
    type: CHANGE_FORM,
    payload: time,
  };
}

function fetchTimeSuccess(time) {
  return {
    type: FETCH_TIME_SUCCESS,
    payload: time,
  };
}

function fetchTimeFailure(error) {
  return {
    type: FETCH_TIME_FAILURE,
    payload: error,
  };
}

function fetchTimeInit(time) {
  return {
    type: FETCH_TIME_INIT,
    payload: time,
  };
}

function updateTimeSuccess() {
  return {
    type: UPDATE_TIME_SUCCESS,
  };
}

function updateTimeFailure(error) {
  return {
    type: UPDATE_TIME_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function updateTime(time, id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_TIME_INIT,
      };
    });

    try {
      await API.time.update(time, id);
      return dispatch(updateTimeSuccess());
    } catch (error) {
      return dispatch(updateTimeFailure(error));
    }
  };
}

export function fetchTime(id) {
  return async (dispatch) => {
    dispatch(fetchTimeInit());
    try {
      const data = await API.time.getSingle(id);
      dispatch(fetchTimeSuccess(data.time));
    } catch (error) {
      dispatch(fetchTimeFailure(error));
    }
  };
}
