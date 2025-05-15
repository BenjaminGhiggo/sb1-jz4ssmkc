import React, { useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  Node,
  Edge,
  NodeTypes,
  ConnectionLineType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useStateMachineStore } from '../stores/stateMachineStore';
import StateNode from './StateNode';
import { DiagramNode, DiagramEdge } from '../lib/parseStateDiagram';

// Custom node types
const nodeTypes: NodeTypes = {
  default: StateNode,
};

// Edge style based on animation state
const getEdgeStyle = (animated: boolean | undefined) => {
  return {
    stroke: animated ? '#3b82f6' : '#9ca3af',
    strokeWidth: animated ? 2 : 1,
    transition: 'all 0.2s ease',
  };
};

interface FlowCanvasProps {
  className?: string;
}

const FlowCanvas: React.FC<FlowCanvasProps> = ({ className = '' }) => {
  const { nodes, edges } = useStateMachineStore();
  
  // Transform nodes and edges to ReactFlow format
  const flowNodes: Node[] = nodes.map((node: DiagramNode) => ({
    id: node.id,
    type: node.type || 'default',
    data: node.data,
    position: node.position,
  }));
  
  const flowEdges: Edge[] = edges.map((edge: DiagramEdge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    animated: edge.animated || false,
    style: getEdgeStyle(edge.animated),
    type: 'default',
  }));

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    console.log('Node clicked:', node);
  }, []);

  return (
    <div className={`h-full ${className}`}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={flowNodes}
          edges={flowEdges}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
          attributionPosition="bottom-right"
          onNodeClick={onNodeClick}
        >
          <Background color="#f1f5f9" gap={16} size={1} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowCanvas;