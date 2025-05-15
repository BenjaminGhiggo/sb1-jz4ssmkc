import React from 'react';
import Editor from './components/Editor';
import FlowCanvas from './components/FlowCanvas';
import FlowControls from './components/FlowControls';
import { Activity } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="h-6 w-6 text-blue-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-800">State Diagram Visualizer</h1>
          </div>
          <div className="text-sm text-gray-500">
            Interactive State Machine Flow Simulator
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Panel - Editor */}
        <div className="w-1/3 border-r overflow-hidden flex flex-col">
          <Editor />
        </div>
        
        {/* Right Panel - Canvas */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <FlowCanvas className="flex-1" />
          <FlowControls />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t px-6 py-2 text-center">
        <p className="text-xs text-gray-500">
          State Diagram Visualizer • Supports PlantUML stateDiagram-v2 syntax
        </p>
      </footer>
    </div>
  );
}

export default App;