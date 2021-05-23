import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ProblemSection from "./components/ProblemSection";
import SimilarSection from "./components/SimilarSection";
import * as problemDuck from './ducks/problems';

function App() {
  const dispatch = useDispatch();

  // Initialize problems
  useEffect(() => {
    dispatch(problemDuck.fetchProblems());
    dispatch(problemDuck.fetchSimilarProblems());
  }, [dispatch]);

  return (
    <main>
      <section className="section-container">
        <ProblemSection
          title="학습지 상세 편집"
        />
        <SimilarSection
          title="문항 교체/추가"
        />
      </section>
    </main>
  );
}

export default App;
