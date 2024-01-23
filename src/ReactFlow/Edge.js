import React from 'react';

const Edge = ({ svgPath }) => {
  const [
    { x: x1, y: y1 }, { x: x2, y: y2 },
    // { x: x3, y: y3 }, { x: x4, y: y4 }
  ] = svgPath;
  const d = `M${x1} ${y1}L${x2} ${y2}`;
  return (
    <svg className="react-flow-edge">
      <path d={d} stroke="#000"></path>
    </svg>
  )
};

export { Edge };
