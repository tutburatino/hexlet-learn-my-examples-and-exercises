const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }
  return node.type === 'directory'
    ? { ...node, children: node.children.map(c => filter(f, c)).filter(v => v) } : node;
};

export default filter;
