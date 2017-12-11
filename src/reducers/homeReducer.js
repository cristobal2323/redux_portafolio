import{
  FETCH_PEOPLE_INIT,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
  FETCH_STACKS_INIT,
  FETCH_STACKS_SUCCESS,
  FETCH_STACKS_FAILURE,
  FETCH_TIMES_INIT,
  FETCH_TIMES_SUCCESS,
  FETCH_TIMES_FAILURE,
  FETCH_PROJECTS_INIT,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case FETCH_PEOPLE_INIT:
      return{
        ...state,
        loadingPerson: true,
        errorPerson: null,
        person: {},
      };
    case FETCH_PEOPLE_SUCCESS:
      return{
        ...state,
        person: action.payload[0],
        errorPerson: null,
        loadingPerson: false,
      };
    case FETCH_PEOPLE_FAILURE:
      return{
        ...state,
        person: {},
        errorPerson: action.payload,
        loadingPerson: false,
      };
    case FETCH_STACKS_INIT :
      return{
        ...state,
        loadingStack: true,
        errorStack: null,
      };
    case FETCH_STACKS_SUCCESS:
      return{
        ...state,
        stacks: action.payload,
        errorStack: null,
        loadingStack: false,
      };
    case FETCH_STACKS_FAILURE:
      return{
        ...state,
        stacks: [],
        errorStack: action.payload,
        loadingStack: false,
      };
    case FETCH_TIMES_INIT:
      return{
        ...state,
        loadingTime: true,
        errorTime: null,
      };
    case FETCH_TIMES_SUCCESS:
      return{
        ...state,
        times: action.payload,
        errorTime: null,
        loadingTime: false,
      };
    case FETCH_TIMES_FAILURE:
      return{
        ...state,
        times: [],
        errorTime: action.payload,
        loadingTime: false,
      };
    case FETCH_PROJECTS_INIT :
      return{
        ...state,
        loadingProject: true,
        errorProject: null,
      };
    case FETCH_PROJECTS_SUCCESS:
      return{
        ...state,
        projects: action.payload,
        errorProject: null,
        loadingProject: false,
      };
    case FETCH_PROJECTS_FAILURE:
      return{
        ...state,
        projects: [],
        errorProject: action.payload,
        loadingProject: false,
      };
    default:
      return state;
  }
}
