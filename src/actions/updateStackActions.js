import {
  CHANGE_FORM,
  UPDATE_STACK_SUCCESS,
  UPDATE_STACK_FAILURE,
  UPDATE_STACK_INIT,
  FETCH_STACK_INIT,
  FETCH_STACK_SUCCESS,
  FETCH_STACK_FAILURE,
} from './types';
import API from '../api';

/* Actions Creators */

export function changeForm(stack) {
  return {
    type: CHANGE_FORM,
    payload: stack,
  };
}

function fetchStackSuccess(stack) {
  return {
    type: FETCH_STACK_SUCCESS,
    payload: stack,
  };
}

function fetchStackFailure(error) {
  return {
    type: FETCH_STACK_FAILURE,
    payload: error,
  };
}

function fetchStackInit(stack) {
  return {
    type: FETCH_STACK_INIT,
    payload: stack,
  };
}

function updateStackSuccess() {
  return {
    type: UPDATE_STACK_SUCCESS,
  };
}

function updateStackFailure(error) {
  return {
    type: UPDATE_STACK_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function updateStack(stack, id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_STACK_INIT,
      };
    });

    try {
      await API.stack.update(stack, id);
      return dispatch(updateStackSuccess());
    } catch (error) {
      return dispatch(updateStackFailure(error));
    }
  };
}

export function fetchStack(id) {
  return async (dispatch) => {
    dispatch(fetchStackInit());
    try {
      const data = await API.stack.getSingle(id);
      dispatch(fetchStackSuccess(data.stack));
    } catch (error) {
      dispatch(fetchStackFailure(error));
    }
  };
}
