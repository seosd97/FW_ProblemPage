import { createAction, handleActions } from 'redux-actions';
import { getProblems, getSimilarProblems } from '../api/problem';

const APP_NAME = 'FW_PROBLEM';
const MODULE_NAME = 'problems';

// Action types
export const FETCH_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/FETCH_PROBLEMS`;
export const FETCH_SIMILAR_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/FETCH_SIMILAR_PROBLEMS`;
export const SET_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/SET_PROBLEMS`;
export const SET_SIMILAR_PROBLEMS = `${APP_NAME}/${MODULE_NAME}/SET_SIMILAR_PROBLEMS`;
export const SET_SELECTED_PROBLEM = `${APP_NAME}/${MODULE_NAME}/SET_SELECTED_PROBLEM`;
export const MOVE_PROBLEM_TO_SIMILAR = `${APP_NAME}/${MODULE_NAME}/MOVE_PROBLEM_TO_SIMILAR`;
export const MOVE_PROBLEM_TO_PROBLEM = `${APP_NAME}/${MODULE_NAME}/MOVE_PROBLEM_TO_PROBLEM`;
export const SWAP_SIMILAR_AND_SELECTED_PROBLEM = `${APP_NAME}/${MODULE_NAME}/SWAP_SIMILAR_AND_SELECTED_PROBLEM`;

// Action creators
export const fetchProblems = () => async dispatch => {
  const data = await getProblems();
  dispatch(setProblems(data.data ?? []));
};

export const fetchSimilarProblems = () => async dispatch => {
  const data = await getSimilarProblems();
  dispatch(setSimilarProblems(data.data ?? []));
};

export const setProblems = createAction(SET_PROBLEMS);
export const setSimilarProblems = createAction(SET_SIMILAR_PROBLEMS);
export const setSelectedProblem = createAction(SET_SELECTED_PROBLEM);
export const moveProblemToSimilar = createAction(MOVE_PROBLEM_TO_SIMILAR);
export const moveProblemToProblem = createAction(MOVE_PROBLEM_TO_PROBLEM);
export const swapSimilarAndSelectedProblem = createAction(SWAP_SIMILAR_AND_SELECTED_PROBLEM);

// Initial state
const initialState = {
  problems: [],
  similarProblems: [],
  selectedProblem: null,
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
  [SET_SELECTED_PROBLEM]: (state, action) => ({
    ...state,
    selectedProblem: action.payload,
  }),
  [MOVE_PROBLEM_TO_SIMILAR]: (state, action) => {
    const problem= action.payload;
    const newProblems = [...state.problems];
    const selectedIndex = newProblems.findIndex(p => p.id === problem.id);
    if (selectedIndex > -1) {
      const removedProblems = newProblems.splice(selectedIndex, 1);
      const newSimilars = [...state.similarProblems, removedProblems[0]];
      
      return {
        ...state,
        problems: newProblems,
        similarProblems: newSimilars,
      };
    }
    return state;
  },
  [MOVE_PROBLEM_TO_PROBLEM]: (state, action) => {
    const problem = action.payload;
    const newSimilars = [...state.similarProblems];
    const selectedIndex = newSimilars.findIndex(p => p.id === problem.id);
    if (selectedIndex > -1) {
      const removedProblems = newSimilars.splice(selectedIndex, 1);
      const newProblems = [...state.problems];
      if (state.selectedProblem != null) {
        const selectedProblemIndex = newProblems.findIndex(p => p.id === state.selectedProblem.id);
        newProblems.splice(selectedProblemIndex + 1, 0, removedProblems[0]);
      } else {
        newProblems.push(removedProblems[0]);
      }
      
      return {
        ...state,
        problems: newProblems,
        similarProblems: newSimilars,
      };
    }
    return state;
  },
  [SWAP_SIMILAR_AND_SELECTED_PROBLEM]: (state, action) => {
    const problem = action.payload;
    const newProblems = [...state.problems];
    const newSimilars = [...state.similarProblems];
    const selectedProblemIndex = newProblems.findIndex(p => p.id === state.selectedProblem.id);
    const selectedIndex = newSimilars.findIndex(p => p.id === problem.id);
    if (selectedProblemIndex > -1 && selectedIndex > -1) {
      newProblems.splice(selectedProblemIndex, 1, problem);
      newSimilars.splice(selectedIndex, 1, {...state.selectedProblem});

      return {
        ...state,
        problems: newProblems,
        similarProblems: newSimilars,
      };
    }
    return state;
  },
}, initialState);
