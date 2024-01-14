import { createContext, useRef, useState } from 'react';
import { ViewPort } from './ViewPort';
import './index.css'

const FlowContext = createContext(null);

/**
 * 画布无限平移 滚动缩放
 * 1. viewport内包含node和edge, 当整个画布变化, node和edge随父元素translate和scale对应变化
 * 2. background 里的pattern xy等值 随画布平移缩放比例变化 
*/
const ReactFlow = ({ children }) => {
  const [translatePosition, setTranslatePosition] = useState({ x: 0, y: 0 });
  const isMouseDownRef = useRef(false);

  const onMouseDown = () => {
    isMouseDownRef.current = true;
  }

  const onMouseMove = (e) => {
    if (isMouseDownRef.current) {
      setTranslatePosition(pre => ({
        x: pre.x + e.movementX,
        y: pre.y + e.movementY
      }))
    }
  } 

  const onMouseUp = () => {
    isMouseDownRef.current = false;
  }

  return (
    <FlowContext.Provider value={{ translatePosition }}>
      <div className="react-flow" onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
        <div className="react-flow-render">
          <div className="react-flow-pane">
            <ViewPort />
          </div>
        </div>
        
        {children}
      </div>
    </FlowContext.Provider>
  );
};



export { ReactFlow, FlowContext };
