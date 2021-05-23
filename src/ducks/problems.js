import { createAction, handleActions } from 'redux-actions';
import { getProblems } from '../api/problem';

const APP_NAME = 'FW_PROBLEM';
const MODULE_NAME = 'problems';

// Action types
export const FETCH_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/FETCH_PROBLEMS`;
export const FETCH_SIMILAR_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/FETCH_SIMILAR_PROBLEMS`;
export const SET_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/SET_PROBLEMS`;
export const SET_SIMILAR_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/SET_SIMILAR_PROBLEMS`;

// Action creators
export const fetchProblems = () => async dispatch => {
  const data = await getProblems();
  dispatch(setProblems(data.data ?? []));
};

export const fetchSimilarProblems = () => async dispatch => {
  const data = await getProblems();
  dispatch(setProblems(data.data ?? []));
};

export const setProblems = createAction(SET_PROBLEMS);
export const setSimilarProblems = createAction(SET_SIMILAR_PROBLEMS);

// Initial state
const initialState = {
  problems: [],
  similarProblems: []
};

// reducer
export default handleActions({
  [FETCH_PROBLEMS]: state => state,
  [FETCH_SIMILAR_PROBLEMS]: state => state,
  [SET_PROBLEMS]: (state, action) => ({
    ...state,
    problems: action.payload,
  }),
  [SET_SIMILAR_PROBLEMS]: (state, action) => ({
    ...state,
    similarProblems: action.payload,
  }),
}, initialState);
