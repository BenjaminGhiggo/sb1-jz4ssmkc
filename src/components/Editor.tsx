import React, { useState } from 'react';
import { useStateMachineStore } from '../stores/stateMachineStore';
import { parseStateDiagram } from '../lib/parseStateDiagram';
import { Code, Play } from 'lucide-react';

const Editor: React.FC = () => {
  const { diagramCode, setDiagramCode, setDiagram, resetSimulation } = useStateMachineStore();
  const [error, setError] = useState<string | null>(null);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiagramCode(e.target.value);
  };

  const generateDiagram = () => {
    try {
      const { nodes, edges } = parseStateDiagram(diagramCode);
      
      if (nodes.length === 0) {
        setError('No valid states found in the diagram. Please check your syntax.');
        return;
      }
      
      setError(null);
      setDiagram(nodes, edges);
      resetSimulation();
    } catch (err) {
      setError('Error parsing the diagram. Please check your syntax.');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-2 px-4 py-2 bg-gray-50 border-b">
        <Code className="w-5 h-5 text-gray-600 mr-2" />
        <h2 className="text-lg font-semibold">State Diagram Editor</h2>
      </div>
      
      <div className="px-4 py-2">
        <p className="text-sm text-gray-600 mb-2">
          Enter state diagram code in PlantUML <code>stateDiagram-v2</code> format:
        </p>
      </div>
      
      <div className="flex-grow px-4 mb-4">
        <textarea
          className="w-full h-full p-3 font-mono text-sm border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 focus:outline-none resize-none"
          value={diagramCode}
          onChange={handleCodeChange}
          placeholder="stateDiagram-v2
[*] --> Start
Start --> Process
Process --> Done
Done --> [*]"
          spellCheck={false}
        />
      </div>
      
      {error && (
        <div className="mx-4 mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="px-4 pb-4">
        <button
          className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
          onClick={generateDiagram}
        >
          <Play className="w-4 h-4 mr-2" />
          Generate Diagram
        </button>
      </div>
    </div>
  );
};

export default Editor;