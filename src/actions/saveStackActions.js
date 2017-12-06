import {
  SAVE_STACK_SUCCESS,
  SAVE_STACK_FAILURE,
  SAVE_STACK_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function saveStackSuccess() {
  return {
    type: SAVE_STACK_SUCCESS,
  };
}

function saveStackFailure(error) {
  return {
    type: SAVE_STACK_FAILURE,
    payload: error,
  };
}

function saveStackInit() {
  return {
    type: SAVE_STACK_INIT,
  };
}

// Actions Creators (Async)

export function saveStack(stack) {
  return async (dispatch) => {
    dispatch(saveStackInit());
    try {
      await API.stack.save(stack);
      return dispatch(saveStackSuccess());
    } catch (error) {
      return dispatch(saveStackFailure(error));
    }
  };
}
