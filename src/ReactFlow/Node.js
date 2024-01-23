import React, { useState, useEffect, useRef } from 'react';

const Node = ({ defaultX = 0, defaultY = 0, index, setSvgPath }) => {
  const [{ x, y }, setTranslatePosition] = useState({ x: defaultX, y: defaultY });
  const isMouseDownRef = useRef(false);

  const onMouseDown = e => {
    e.stopPropagation();
    isMouseDownRef.current = true;
  }

  const onMouseMove = (e) => {
    e.stopPropagation();
    if (isMouseDownRef.current) {
      let translateX = x;
      let translateY = y;

      setTranslatePosition(pre => {
        translateX = pre.x + e.movementX;
        translateY = pre.y + e.movementY;
        return {
          x: translateX,
          y: translateY,
        }
      });

      if (index === 0) {
        setSvgPath(pre => {
          return [
            { x: translateX + 200, y: translateY + 100 },
            // { x: Math.abs((pre[3] - translateX - 200) / 2) + 200 + 200, y: translateY },
            // pre[2],
            pre[1]
          ];
        })
      } else {
        setSvgPath(pre => {
          return [
            pre[0],
            { x: translateX, y: translateY + 100 }
          ]
        })
      }
    }
  } 

  const onMouseUp = e => {
    e.stopPropagation();
    isMouseDownRef.current = false;
  }

  // 宽高200* 200 供测试
  return (
    <div
      className="react-flow-node"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      {/* <div className="react-flow-port left-port" />
      <div className="react-flow-port right-port" /> */}
      {index}
    </div>
  )
}

const Nodes = (props) => {
  return (
    <div className="react-flow-nodes">
      <Node {...props} index={0} />
      <Node {...props} defaultX={400} index={1} />
    </div>
  )
}

export { Nodes }