import './index.css'

/**
 * 无限平移 滚动缩放
 * 
 */
const ReactFlow = () => {
  return (
    <div className="react-flow">
      <div className="react-flow-pane" onMouseMove={v => console.log(v)}>

        
        <div className="react-flow-viewport" style={{ transform: 'translate(0px, 0px) scale(1)' }}>
          {/* node */}
          {/* edge */}
        </div>
      </div>

      {/* background */}
    </div>
  );
};

export { ReactFlow };
