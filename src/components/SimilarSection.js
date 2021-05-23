import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import '../styles/styles.scss';
import ScrollView from './ScrollView';
import SimilarProblemItem from './SimilarProblemItem';
import * as problemDuck from '../ducks/problems';

const SimilarSection = ({
  title = "",
}) => {
  const { similarProblems, selectedProblem } = useSelector(state => state.problems, shallowEqual);

  const dispatch = useDispatch();

  const onAddProblem = useCallback((problem) => {
    dispatch(problemDuck.moveProblemToProblem(problem));
  }, [dispatch]);

  const onSwapProblem = useCallback((problem) => {
    dispatch(problemDuck.swapSimilarAndSelectedProblem(problem));
  }, [dispatch]);

  return (
    <section className="similar-section">
      <div className="section-header">
        <span className="sh-title">{title}</span>
      </div>
      {
        selectedProblem != null ? (
          <ScrollView>
            <div className="similar-list-header">
              <span>{selectedProblem.unitName}</span>
            </div>
            {
              similarProblems.map((p, i) => (
                <SimilarProblemItem
                  key={`SimilarItem_${p.id}`}
                  index={i+1}
                  problem={p}
                  onAddProblem={onAddProblem}
                  onSwapProblem={onSwapProblem}
                />
              ))
            }
          </ScrollView>
        ) : (
          <div className="similar-empty-container">
            <div>
              <span className="se-highlighted">유사문항</span> 버튼을 누르면<br/>해당 문제의 유사 문항을 볼 수 있습니다.
            </div>
          </div>
        )
      }
    </section>
  )
}

export default SimilarSection;