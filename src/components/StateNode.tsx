import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { useStateMachineStore } from '../stores/stateMachineStore';
import { NodeStatus } from '../lib/parseStateDiagram';

const getNodeStyles = (status: NodeStatus): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    padding: '10px 20px',
    borderRadius: '8px',
    minWidth: '150px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  };

  switch (status) {
    case 'active':
      return {
        ...baseStyle,
        backgroundColor: '#3b82f6',
        color: 'white',
        border: '2px solid #2563eb',
        boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.3)',
      };
    case 'done':
      return {
        ...baseStyle,
        backgroundColor: '#10b981',
        color: 'white',
        border: '2px solid #059669',
      };
    case 'error':
      return {
        ...baseStyle,
        backgroundColor: '#ef4444',
        color: 'white',
        border: '2px solid #dc2626',
        boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.3)',
      };
    case 'pending':
    default:
      return {
        ...baseStyle,
        backgroundColor: 'white',
        color: '#1f2937',
        border: '2px solid #e5e7eb',
      };
  }
};

const StateNode = ({ id, data }: NodeProps) => {
  const status = useStateMachineStore(state => 
    state.nodes.find(n => n.id === id)?.status || 'pending'
  );

  const nodeStyles = getNodeStyles(status);

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
      />
      <div style={nodeStyles}>
        {data.label}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
      />
    </>
  );
};

export default memo(StateNode);