import {
  FETCH_STACKS_INIT,
  FETCH_STACKS_SUCCESS,
  FETCH_STACKS_FAILURE,
  FETCH_STACKS_SUCCESSMORE,
  DELETE_STACK_SUCCESS,
  DELETE_STACK_FAILURE,
  DELETE_STACK_INIT,
} from './types';
import API from '../api';

/* Actions Creators */
function fetchStacksSuccess(stack) {
  return {
    type: FETCH_STACKS_SUCCESS,
    payload: stack,
  };
}

function fetchStacksFailure(error) {
  return {
    type: FETCH_STACKS_FAILURE,
    payload: error,
  };
}

function fetchStacksInit() {
  return {
    type: FETCH_STACKS_INIT,
  };
}

function fetchStacksSuccessMore(stack) {
  return {
    type: FETCH_STACKS_SUCCESSMORE,
    payload: stack,
  };
}

function deleteStackSuccess(num) {
  return {
    type: DELETE_STACK_SUCCESS,
    payload: num,
  };
}

function deleteStackFailure(error) {
  return {
    type: DELETE_STACK_FAILURE,
    payload: error,
  };
}

function deleteStackInit() {
  return {
    type: DELETE_STACK_INIT,
  };
}

// Actions Creators (Async)

export function fetchStacks(stack) {
  return async (dispatch) => {
    dispatch(fetchStacksInit());
    try {
      const data = await API.stack.getAll(stack);
      dispatch(fetchStacksSuccess(data.stacks));
    } catch (error) {
      dispatch(fetchStacksFailure(error));
    }
  };
}

export function fetchStacksMore(stack) {
  return async (dispatch) => {
    dispatch(fetchStacksInit());
    try {
      const data = await API.stack.getAll(stack);
      dispatch(fetchStacksSuccessMore(data.stacks));
    } catch (error) {
      dispatch(fetchStacksFailure(error));
    }
  };
}


export function deleteStack(id,num) {
  return async (dispatch) => {
    dispatch(deleteStackInit());
    try {
      await API.stack.delete(id);
      return dispatch(deleteStackSuccess(num));
    } catch (error) {
      return dispatch(deleteStackFailure(error));
    }
  };
}
