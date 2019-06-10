import path from 'path';

const findFilesByName = (tree, str) => {
  const iter = (acc, currentPath, n) => {
    if (n.type === 'file') {
      return n.name.includes(str)
        ? [...acc, path.join(...currentPath, n.name)] : acc;
    }
    return n.children.reduce((iAcc, c) => iter(iAcc, [...currentPath, `/${n.name}`], c), acc);
  };
  return iter([], [], tree);
};

export default findFilesByName;
