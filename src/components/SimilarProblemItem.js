import React, { useCallback } from 'react';
import Button from './Button';

const SimilarProblemItem = ({
  index,
  problem,
  onAddProblem,
  onSwapProblem,
}) => {
  const onClickAdd = useCallback((e) => {
    if (onAddProblem != null) {
      onAddProblem(problem);
    }
  }, [onAddProblem, problem]);

  const onClickSwap = useCallback(() => {
    if (onSwapProblem != null) {
      onSwapProblem(problem);
    }
  }, [onSwapProblem, problem]);

  return (
    <section className="problem-item-container">
      <div className="problem-item-header">
        <div className="pi-header-type">{problem.problemType}</div>
        <div className="pi-header-unitname">{problem.unitName}</div>
        <div className="problem-item-button-container">
          <Button text="추가" onClick={onClickAdd} />
          <Button text="교체" onClick={onClickSwap} />
        </div>
      </div>
      <div className="problem-item-content">
        <div className="pi-content-index">{index}</div>
        <div className="pi-content-img-container">
          <img src={problem.problemURL} alt={`img_problem_${problem.unitName}`} />
        </div>
      </div>
    </section>
  )
};

export default SimilarProblemItem;
