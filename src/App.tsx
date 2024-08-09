import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import ComponentGallery from './componentgallery';
import useFlowComponents from './useFlowComponents';

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { nodeTypes } = useFlowComponents();

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const createNode = useCallback((componentName) => {
    const newNode = {
      id: `${componentName}-${nodes.length + 1}`,
      type: componentName,
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      data: { label: `${componentName} node` },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [nodes, setNodes]);

  return (
    <>
      <ComponentGallery createNode={createNode} />
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </>
  );
}
