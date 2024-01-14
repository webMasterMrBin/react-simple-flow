import { ReactFlow } from "./ReactFlow";
import { Background } from './ReactFlow/Background';

function App() {
  return (
    <div style={{ height: 800 }}>
      <ReactFlow>
        <Background />
      </ReactFlow>
    </div>
    
  );
}

export default App;
