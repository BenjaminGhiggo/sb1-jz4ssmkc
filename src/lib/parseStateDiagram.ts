/**
 * Parse a stateDiagram-v2 string and convert it to nodes and edges
 * Supports basic state diagram syntax from PlantUML
 */

export type NodeStatus = 'pending' | 'active' | 'done' | 'error';

export interface DiagramNode {
  id: string;
  type?: string;
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
  status: NodeStatus;
}

export interface DiagramEdge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  style?: Record<string, unknown>;
}

export interface ParsedDiagram {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

/**
 * Generate a proper ID from a node label
 */
const generateId = (label: string): string => {
  // For start and end nodes
  if (label === '[*]') {
    return label === '[*]' ? 'start' : 'end';
  }
  
  // For regular nodes, create a lowercase id without spaces
  return label.toLowerCase().replace(/\s+/g, '-');
};

/**
 * Parse a stateDiagram-v2 string and convert it to nodes and edges
 */
export const parseStateDiagram = (code: string): ParsedDiagram => {
  // Initialize result
  const result: ParsedDiagram = {
    nodes: [],
    edges: []
  };

  // Keep track of nodes to avoid duplicates
  const nodeMap = new Map<string, DiagramNode>();
  
  // Handle start and end special nodes
  let hasStartNode = false;
  let hasEndNode = false;

  // Skip empty input
  if (!code.trim()) {
    return result;
  }

  // Parse the code line by line
  const lines = code.split('\n');
  let validDiagram = false;

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Check for stateDiagram-v2 declaration
    if (trimmedLine === 'stateDiagram-v2') {
      validDiagram = true;
      continue;
    }

    if (!validDiagram) continue;

    // Skip comments and empty lines
    if (trimmedLine.startsWith('//') || trimmedLine === '') {
      continue;
    }

    // Parse state transitions (arrows)
    const transitionMatch = trimmedLine.match(/^(.+?)\s*-->\s*(.+?)$/);
    if (transitionMatch) {
      const [, sourceLabel, targetLabel] = transitionMatch;
      
      // Generate IDs for source and target
      const sourceId = sourceLabel === '[*]' ? 'start' : generateId(sourceLabel);
      const targetId = targetLabel === '[*]' ? 'end' : generateId(targetLabel);
      
      // Add source node if it doesn't exist
      if (!nodeMap.has(sourceId)) {
        if (sourceLabel === '[*]') {
          hasStartNode = true;
          nodeMap.set('start', {
            id: 'start',
            type: 'input',
            data: { label: 'Start' },
            position: { x: 0, y: 0 },
            status: 'pending'
          });
        } else {
          nodeMap.set(sourceId, {
            id: sourceId,
            data: { label: sourceLabel },
            position: { x: 0, y: 0 },
            status: 'pending'
          });
        }
      }
      
      // Add target node if it doesn't exist
      if (!nodeMap.has(targetId)) {
        if (targetLabel === '[*]') {
          hasEndNode = true;
          nodeMap.set('end', {
            id: 'end',
            type: 'output',
            data: { label: 'End' },
            position: { x: 0, y: 0 },
            status: 'pending'
          });
        } else {
          nodeMap.set(targetId, {
            id: targetId,
            data: { label: targetLabel },
            position: { x: 0, y: 0 },
            status: 'pending'
          });
        }
      }
      
      // Add edge
      result.edges.push({
        id: `e-${sourceId}-${targetId}`,
        source: sourceId,
        target: targetId
      });
    }
  }
  
  // If we didn't find a start or end node but we have nodes, add them
  if (result.edges.length > 0) {
    if (!hasStartNode) {
      const firstNode = result.edges[0].source;
      if (firstNode !== 'start') {
        nodeMap.set('start', {
          id: 'start',
          type: 'input',
          data: { label: 'Start' },
          position: { x: 0, y: 0 },
          status: 'pending'
        });
        
        result.edges.unshift({
          id: `e-start-${firstNode}`,
          source: 'start',
          target: firstNode
        });
      }
    }
    
    if (!hasEndNode) {
      const lastNode = result.edges[result.edges.length - 1].target;
      if (lastNode !== 'end') {
        nodeMap.set('end', {
          id: 'end',
          type: 'output',
          data: { label: 'End' },
          position: { x: 0, y: 0 },
          status: 'pending'
        });
        
        result.edges.push({
          id: `e-${lastNode}-end`,
          source: lastNode,
          target: 'end'
        });
      }
    }
  }

  // Position nodes in a simple cascade layout
  let x = 50;
  let y = 50;
  let skipCount = 0;
  
  // First, set positions for the start node and first node
  if (nodeMap.has('start')) {
    const startNode = nodeMap.get('start')!;
    startNode.position = { x, y };
    skipCount++;
  }

  // Cascade layout for the remaining nodes (except end)
  const nodes = Array.from(nodeMap.values())
    .filter(node => node.id !== 'start' && node.id !== 'end');
  
  nodes.forEach((node, idx) => {
    x += 200;
    node.position = { x, y };
  });
  
  // Finally, position the end node
  if (nodeMap.has('end')) {
    const endNode = nodeMap.get('end')!;
    x += 200;
    endNode.position = { x, y };
  }
  
  // Add all nodes to the result
  result.nodes = Array.from(nodeMap.values());
  
  return result;
};