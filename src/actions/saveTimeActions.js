import {
  SAVE_TIME_SUCCESS,
  SAVE_TIME_FAILURE,
  SAVE_TIME_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function saveTimeSuccess() {
  return {
    type: SAVE_TIME_SUCCESS,
  };
}

function saveTimeFailure(error) {
  return {
    type: SAVE_TIME_FAILURE,
    payload: error,
  };
}

function saveTimeInit() {
  return {
    type: SAVE_TIME_INIT,
  };
}

// Actions Creators (Async)

export function saveTime(time) {
  return async (dispatch) => {
    dispatch(saveTimeInit());
    try {
      await API.time.save(time);
      return dispatch(saveTimeSuccess());
    } catch (error) {
      return dispatch(saveTimeFailure(error));
    }
  };
}
