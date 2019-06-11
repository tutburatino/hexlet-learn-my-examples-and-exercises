import { mkdir, mkfile, reduce } from 'hexlet-immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data'),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);
const calculateFilesCount = directory => reduce((acc, c) => (c.type === 'file' ? acc + 1 : acc), directory, 0);

const dirs = tree.children.filter(c => c.type === 'directory')
  .map(d => [d.name, calculateFilesCount(d)]);

console.log(dirs); // => [ [ 'etc', 1 ], [ 'consul', 2 ] ]
