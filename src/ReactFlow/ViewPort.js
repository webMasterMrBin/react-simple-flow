import { useContext } from 'react';
import { FlowContext } from '.';

const ViewPort = () => {
  const { translatePosition: { x, y } } = useContext(FlowContext);

  const translate = `translate(${x}px, ${y}px)`;

  return (
    <div className="react-flow-viewport" style={{ transform: `${translate} scale(0.84)` }}>
      {/* node */}
      {/* edge */}
      {/* <div className="test-node">node</div> */}
    </div>
  );
};

export { ViewPort }