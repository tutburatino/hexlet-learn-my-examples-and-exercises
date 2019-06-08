const mapTree = (func, tree) => {
  if (!tree.children) {
    return func(tree);
  }
  return { ...func(tree), children: tree.children.map(item => mapTree(func, item)) };
};

export default mapTree;
