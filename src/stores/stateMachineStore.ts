import { create } from 'zustand';
import { DiagramNode, DiagramEdge, NodeStatus } from '../lib/parseStateDiagram';

interface StateMachineState {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  currentNodeId: string | null;
  visitedNodeIds: Set<string>;
  stopped: boolean;
  diagramCode: string;
  
  setDiagram: (nodes: DiagramNode[], edges: DiagramEdge[]) => void;
  setDiagramCode: (code: string) => void;
  resetSimulation: () => void;
  nextState: () => void;
  previousState: () => void;
  stopSimulation: () => void;
  getNodeStatus: (nodeId: string) => NodeStatus;
  getNodeById: (nodeId: string) => DiagramNode | undefined;
  canGoForward: () => boolean;
  canGoBackward: () => boolean;
}

export const useStateMachineStore = create<StateMachineState>((set, get) => ({
  nodes: [],
  edges: [],
  currentNodeId: null,
  visitedNodeIds: new Set<string>(),
  stopped: false,
  diagramCode: '',

  setDiagram: (nodes, edges) => {
    set({
      nodes,
      edges,
      currentNodeId: null,
      visitedNodeIds: new Set<string>(),
      stopped: false
    });
  },

  setDiagramCode: (code) => {
    set({ diagramCode: code });
  },

  resetSimulation: () => {
    set(state => ({
      currentNodeId: null,
      visitedNodeIds: new Set<string>(),
      stopped: false,
      nodes: state.nodes.map(node => ({
        ...node,
        status: 'pending' as NodeStatus
      }))
    }));
  },

  nextState: () => {
    const { nodes, edges, currentNodeId, visitedNodeIds, stopped } = get();
    
    if (stopped) return;
    
    // If no current node, start from the beginning
    if (!currentNodeId) {
      const startNode = nodes.find(node => node.id === 'start' || node.type === 'input');
      if (!startNode) return;
      
      set(state => {
        const updatedNodes = state.nodes.map(node => ({
          ...node,
          status: node.id === startNode.id ? 'active' : 'pending'
        }));
        
        return {
          nodes: updatedNodes,
          currentNodeId: startNode.id,
          visitedNodeIds: new Set([startNode.id])
        };
      });
      return;
    }
    
    // Find the next node
    const outgoingEdges = edges.filter(edge => edge.source === currentNodeId);
    if (outgoingEdges.length === 0) return;
    
    const nextNodeId = outgoingEdges[0].target;
    const nextNode = nodes.find(node => node.id === nextNodeId);
    if (!nextNode) return;
    
    // Update nodes statuses
    set(state => {
      const newVisitedNodeIds = new Set(state.visitedNodeIds);
      newVisitedNodeIds.add(nextNodeId);
      
      const updatedNodes = state.nodes.map(node => {
        if (node.id === currentNodeId) {
          return { ...node, status: 'done' };
        }
        if (node.id === nextNodeId) {
          return { ...node, status: 'active' };
        }
        return node;
      });
      
      // Update edge animation
      const updatedEdges = state.edges.map(edge => {
        if (edge.source === currentNodeId && edge.target === nextNodeId) {
          return { ...edge, animated: true };
        }
        return { ...edge, animated: false };
      });
      
      return {
        nodes: updatedNodes,
        edges: updatedEdges,
        currentNodeId: nextNodeId,
        visitedNodeIds: newVisitedNodeIds
      };
    });
  },

  previousState: () => {
    const { nodes, edges, currentNodeId, visitedNodeIds } = get();
    
    if (!currentNodeId || visitedNodeIds.size <= 1) {
      // If at the start, just reset
      get().resetSimulation();
      return;
    }
    
    // Find the previous node
    const incomingEdges = edges.filter(edge => edge.target === currentNodeId);
    if (incomingEdges.length === 0) return;
    
    const prevNodeId = incomingEdges[0].source;
    const prevNode = nodes.find(node => node.id === prevNodeId);
    if (!prevNode) return;
    
    // Update nodes statuses
    set(state => {
      const newVisitedNodeIds = new Set(state.visitedNodeIds);
      newVisitedNodeIds.delete(currentNodeId);
      
      const updatedNodes = state.nodes.map(node => {
        if (node.id === currentNodeId) {
          return { ...node, status: 'pending' };
        }
        if (node.id === prevNodeId) {
          return { ...node, status: 'active' };
        }
        return node;
      });
      
      // Update edge animation
      const updatedEdges = state.edges.map(edge => {
        if (edge.source === prevNodeId && edge.target === currentNodeId) {
          return { ...edge, animated: true };
        }
        return { ...edge, animated: false };
      });
      
      return {
        nodes: updatedNodes,
        edges: updatedEdges,
        currentNodeId: prevNodeId,
        visitedNodeIds: newVisitedNodeIds
      };
    });
  },

  stopSimulation: () => {
    const { currentNodeId } = get();
    
    if (!currentNodeId) return;
    
    set(state => {
      const updatedNodes = state.nodes.map(node => {
        if (node.id === currentNodeId) {
          return { ...node, status: 'error' };
        }
        return node;
      });
      
      return {
        nodes: updatedNodes,
        stopped: true
      };
    });
  },

  getNodeStatus: (nodeId) => {
    const { nodes } = get();
    const node = nodes.find(n => n.id === nodeId);
    return node ? node.status : 'pending';
  },

  getNodeById: (nodeId) => {
    const { nodes } = get();
    return nodes.find(n => n.id === nodeId);
  },

  canGoForward: () => {
    const { currentNodeId, edges, nodes, stopped } = get();
    
    if (stopped) return false;
    
    // If no current node, we can start if we have nodes
    if (!currentNodeId) {
      return nodes.length > 0;
    }
    
    // Check if current node is the end node
    const currentNode = nodes.find(n => n.id === currentNodeId);
    if (currentNode?.id === 'end' || currentNode?.type === 'output') {
      return false;
    }
    
    // Check if there are outgoing edges
    const outgoingEdges = edges.filter(edge => edge.source === currentNodeId);
    return outgoingEdges.length > 0;
  },

  canGoBackward: () => {
    const { currentNodeId, visitedNodeIds } = get();
    return !!currentNodeId && visitedNodeIds.size > 1;
  }
}));