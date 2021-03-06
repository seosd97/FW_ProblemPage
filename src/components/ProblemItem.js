import React, { useCallback } from 'react';
import Button from './Button';
import CheckBox from './CheckBox';

const ProblemItem = ({
  index,
  problem,
  onToggleProblem,
  onRemoveProblem,
}) => {
  const onClickSimilar = useCallback((e) => {
    if (onToggleProblem != null) {
      onToggleProblem(e.target.checked, problem);
    }
  }, [onToggleProblem, problem]);

  const onClickRemove = useCallback(() => {
    if (onRemoveProblem != null) {
      onRemoveProblem(problem);
    }
  }, [onRemoveProblem, problem]);

  return (
    <section className="problem-item-container">
      <div className="problem-item-header">
        <div className="pi-header-type">{problem.problemType}</div>
        <div className="pi-header-unitname">{problem.unitName}</div>
        <div className="problem-item-button-container">
          <CheckBox id={problem.id} text="유사문항" onClick={onClickSimilar} />
          <Button text="삭제" onClick={onClickRemove} />
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

export default ProblemItem;
