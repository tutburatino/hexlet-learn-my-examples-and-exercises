const reduce = (f, node, acc) => {
  const newAcc = f(acc, node);
  return node.type === 'directory'
    ? node.children.reduce((accum, c) => reduce(f, c, accum), newAcc) : newAcc;
};

export default reduce;
