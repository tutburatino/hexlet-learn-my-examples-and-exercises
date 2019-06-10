import { mkdir, mkfile } from 'hexlet-immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);

const findEmptyDirsDepth = (root, depth) => {
  const iter = (acc, currenDepth, n) => {
    if (currenDepth > depth || n.type === 'file') {
      return acc;
    }
    if (n.children.length === 0) {
      return [...acc, n.name];
    }
    return n.children.reduce((iAcc, c) => iter(iAcc, currenDepth + 1, c), acc);
  };
  return iter([], 0, root);
};

const dirs = findEmptyDirsDepth(tree, 2);

console.log(dirs); // => ['apache']
