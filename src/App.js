import { useLayoutEffect, useReducer, useEffect } from 'react';
import { ReactFlow } from "./ReactFlow";
import { Background } from './ReactFlow/Background';

function App() {

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow>
        <Background />
      </ReactFlow>
    </div>

  );
}

export default App;
