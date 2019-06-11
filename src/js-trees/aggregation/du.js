import { reduce } from 'hexlet-immutable-fs-trees';

const calculateSizeOfFiles = directory => reduce(
  (acc, n) => (n.type === 'file' ? acc + n.meta.size : acc), directory, 0,
);

const du = (tree) => {
  console.log(`!!! tree: ${JSON.stringify(tree)}`);
  return tree.children.map(c => (c.type === 'file' ? [c.name, c.meta.size] : [c.name, calculateSizeOfFiles(c)]));
};

export default du;
