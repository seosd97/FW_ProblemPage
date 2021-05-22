import React from 'react';
import '../styles/styles.scss';

const ProblemSection = ({ title = "" }) => {
  return (
    <section className="problem-section">
      <div className="section-header">
        <span className="sh-title">{title}</span>
      </div>
    </section>
  )
}

export default ProblemSection;