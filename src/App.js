import { ReactFlow } from "./ReactFlow";
import { Background } from './ReactFlow/Background';

function App() {
  return (
    <div style={{ height: 600 }}>
      <ReactFlow>
        <Background />
      </ReactFlow>
    </div>
    
  );
}

export default App;
