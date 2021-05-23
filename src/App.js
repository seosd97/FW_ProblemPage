import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ProblemSection from "./components/ProblemSection";
import * as problemDuck from './ducks/problems';

function App() {
  const dispatch = useDispatch();

  // Initialize problems
  useEffect(() => {
    dispatch(problemDuck.fetchProblems());
    dispatch(problemDuck.fetchProblems());
  }, [dispatch]);

  const data = useSelector(state => state.problems.problems);
  console.log(data);

  return (
    <div className="App">
      <ProblemSection title="학습지 상세 편집" />
    </div>
  );
}

export default App;
