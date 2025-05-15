import React from 'react';
import { useStateMachineStore } from '../stores/stateMachineStore';
import { 
  Play, 
  SkipBack, 
  Square, 
  RotateCcw
} from 'lucide-react';

interface ControlButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const ControlButton: React.FC<ControlButtonProps> = ({ 
  icon, 
  label, 
  onClick, 
  disabled = false
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex flex-col items-center justify-center px-4 py-2
      rounded-md transition-colors duration-200
      ${disabled 
        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
        : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900'
      }
    `}
  >
    <div className="text-xl mb-1">{icon}</div>
    <span className="text-xs">{label}</span>
  </button>
);

const FlowControls: React.FC = () => {
  const { 
    nextState, 
    previousState, 
    resetSimulation, 
    stopSimulation,
    canGoForward,
    canGoBackward,
    stopped,
    currentNodeId,
    nodes
  } = useStateMachineStore();
  
  const isAtEnd = currentNodeId === 'end' || nodes.find(n => n.id === currentNodeId)?.type === 'output';
  
  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-50 border-t">
      <ControlButton
        icon={<SkipBack size={20} />}
        label="Previous"
        onClick={previousState}
        disabled={!canGoBackward() || stopped}
      />
      
      <ControlButton
        icon={<Play size={20} />}
        label="Next"
        onClick={nextState}
        disabled={!canGoForward() || isAtEnd}
      />
      
      <ControlButton
        icon={<Square size={20} />}
        label="Stop"
        onClick={stopSimulation}
        disabled={!currentNodeId || stopped}
      />
      
      <ControlButton
        icon={<RotateCcw size={20} />}
        label="Reset"
        onClick={resetSimulation}
        disabled={!currentNodeId && nodes.length === 0}
      />
    </div>
  );
};

export default FlowControls;