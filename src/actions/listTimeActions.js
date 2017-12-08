import {
  FETCH_TIMES_INIT,
  FETCH_TIMES_SUCCESS,
  FETCH_TIMES_FAILURE,
  FETCH_TIMES_SUCCESSMORE,
  DELETE_TIME_SUCCESS,
  DELETE_TIME_FAILURE,
  DELETE_TIME_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function fetchTimesSuccess(time) {
  return {
    type: FETCH_TIMES_SUCCESS,
    payload: time,
  };
}

function fetchTimesFailure(error) {
  return {
    type: FETCH_TIMES_FAILURE,
    payload: error,
  };
}

function fetchTimesInit() {
  return {
    type: FETCH_TIMES_INIT,
  };
}

function fetchTimesSuccessMore(time) {
  return {
    type: FETCH_TIMES_SUCCESSMORE,
    payload: time,
  };
}

function deleteTimeSuccess(num) {
  return {
    type: DELETE_TIME_SUCCESS,
    payload: num,
  };
}

function deleteTimeFailure(error) {
  return {
    type: DELETE_TIME_FAILURE,
    payload: error,
  };
}

function deleteTimeInit() {
  return {
    type: DELETE_TIME_INIT,
  };
}

// Actions Creators (Async)

export function fetchTimes(time) {
  return async (dispatch) => {
    dispatch(fetchTimesInit());
    try {
      const data = await API.time.getAll(time);
      dispatch(fetchTimesSuccess(data.times));
    } catch (error) {
      dispatch(fetchTimesFailure(error));
    }
  };
}

export function fetchTimesMore(time) {
  return async (dispatch) => {
    dispatch(fetchTimesInit());
    try {
      const data = await API.time.getAll(time);
      dispatch(fetchTimesSuccessMore(data.times));
    } catch (error) {
      dispatch(fetchTimesFailure(error));
    }
  };
}


export function deleteTime(id,num) {
  return async (dispatch) => {
    dispatch(deleteTimeInit());
    try {
      await API.time.delete(id);
      return dispatch(deleteTimeSuccess(num));
    } catch (error) {
      return dispatch(deleteTimeFailure(error));
    }
  };
}
