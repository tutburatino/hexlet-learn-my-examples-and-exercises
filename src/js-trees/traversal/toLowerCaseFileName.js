export default node => (
  node.type === 'file' ? { ...node, name: node.name.toLowerCase() } : node);
