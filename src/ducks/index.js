import { combineReducers } from 'redux';
import problems from './problems';

// NOTE: 현재는 한개의 module밖에 없지만 구조상 추가에 유리하도록 combineReducer를 사용함.
const rootReducer = combineReducers({
  problems,
});

export default rootReducer;
