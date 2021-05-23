import React from 'react';

const ScrollView = ({ children }) => (
  <div className="scroll-view-container">
    <div className="scroll-view-inner">
      {children}
    </div>
  </div>
);

export default ScrollView;
