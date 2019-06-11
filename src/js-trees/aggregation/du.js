import { reduce } from 'hexlet-immutable-fs-trees';

const calculateSizeOfFiles = directory => reduce(
  (acc, n) => (n.type === 'file' ? acc + n.meta.size : acc), directory, 0,
);

const du = tree => tree.children
  .map(c => (c.type === 'file' ? [c.name, c.meta.size] : [c.name, calculateSizeOfFiles(c)]))
  .slice()
  .sort(([, a], [, b]) => (b - a));

export default du;
