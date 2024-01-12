import { createContext } from 'react';
import { ViewPort } from './ViewPort';
import './index.css'

const Context = createContext(null);

/**
 * 画布无限平移 滚动缩放
 * 1. viewport内包含node和edge, 当整个画布变化, node和edge随父元素translate和scale对应变化
 * 2. background 里的pattern xy等值 随画布平移缩放比例变化 
*/
const ReactFlow = ({ children }) => {
  return (
    <div className="react-flow">
      <div className="react-flow-render">
        <div className="react-flow-pane" onMouseMove={v => console.log(v)}>
          <ViewPort />
        </div>
      </div>
      
      {children}
    </div>
  );
};



export { ReactFlow, Context };
