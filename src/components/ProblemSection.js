import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import '../styles/styles.scss';
import ProblemItem from './ProblemItem';
import ScrollView from './ScrollView';
import * as problemDuck from '../ducks/problems';

const ProblemSection = ({
  title = "",
}) => {
  const { problems, selectedProblem } = useSelector(state => state.problems, shallowEqual);

  const dispatch = useDispatch();

  const onToggleProblem = useCallback((isSelected, problem) => {
    const payload = isSelected ? problem : null;
    dispatch(problemDuck.setSelectedProblem(payload));
  }, [dispatch]);

  const onRemoveProblem = useCallback((problem) => {
    dispatch(problemDuck.moveProblemToSimilar(problem));

    if (selectedProblem != null && selectedProblem.id === problem.id) {
      dispatch(problemDuck.setSelectedProblem(null));
    }
  }, [dispatch, selectedProblem]);

  return (
    <section className="problem-section">
      <div className="section-header">
        <span className="sh-title">{title}</span>
      </div>
      <ScrollView>
        {
          problems.map((p, i) => (
            <ProblemItem
              key={`ProbleItem_${p.id}`}
              problem={p}
              index={i+1}
              onToggleProblem={onToggleProblem}
              onRemoveProblem={onRemoveProblem}
            />
          ))
        }
      </ScrollView>
    </section>
  )
}

export default ProblemSection;