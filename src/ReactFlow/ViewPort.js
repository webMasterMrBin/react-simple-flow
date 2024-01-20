import { useContext } from 'react';
import { FlowContext } from '.';

const ViewPort = () => {
  const { translatePosition: { x, y }, scale } = useContext(FlowContext);

  const translate = `translate(${x}px, ${y}px)`;

  return (
    <div className="react-flow-viewport" style={{ transform: `${translate} scale(${scale})` }}>
      {/* node */}
      {/* edge */}
      {/* <div className="test-node">node</div> */}
    </div>
  );
};

export { ViewPort }