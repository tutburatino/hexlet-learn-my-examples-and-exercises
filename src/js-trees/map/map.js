const mapTree = (func, tree) => {
  const updatedNode = func(tree);
  return tree.type === 'directory'
    ? { ...updatedNode, children: tree.children.map(c => mapTree(func, c)) } : updatedNode;
};

export default mapTree;
