import { createAction, handleActions } from 'redux-actions';

const APP_NAME = 'FW_PROBLEM';
const MODULE_NAME = 'problems';

// Action types
export const FETCH_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/FETCH_PROBLEMS`;
export const FETCH_SIMILAR_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/FETCH_SIMILAR_PROBLEMS`;
export const SET_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/SET_PROBLEMS`;

// Action creators
export const fetchProblems = createAction(FETCH_PROBLEMS);
export const fetchSimilarProblems = createAction(FETCH_SIMILAR_PROBLEMS);
export const setProblems = createAction(SET_PROBLEMS);

// Initial state
const initialState = {
  problems: [],
  similarProblems: []
};

// reducer
export default handleActions({
  [FETCH_PROBLEMS]: state => state,
  [FETCH_SIMILAR_PROBLEMS]: state => state,
  [SET_PROBLEMS]: state => state,
}, initialState);