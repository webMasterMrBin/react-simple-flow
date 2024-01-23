import { useContext, useState } from 'react';
import { Nodes } from './Node';
import { Edge } from './Edge';
import { FlowContext } from '.';

const ViewPort = () => {
  const { translatePosition: { x, y }, scale } = useContext(FlowContext);

  const translate = `translate(${x}px, ${y}px)`;

  const startX = 200 ;
  const startY = 100;
  const endX = 400;
  const endY = startY;

  // path路径点 起点和终点, 只记录测试的两个节点的位置, 多节点暂不涉及
  const [svgPath, setSvgPath] = useState([
    { x: startX, y: startY },
    // { x: Math.abs((endX - startX) / 2) + 200, y: startY },
    // { x: Math.abs((endX - startX) / 2) + 200, y: startY },
    { x: endX, y: endY }
  ]);

  console.log('svgPath', svgPath);

  return (
    <div className="react-flow-viewport" style={{ transform: `${translate} scale(${scale})` }}>
      {/* node */}
      {/* edge */}
      <Nodes setSvgPath={setSvgPath} />
      <Edge svgPath={svgPath} />
    </div>
  );
};

export { ViewPort }