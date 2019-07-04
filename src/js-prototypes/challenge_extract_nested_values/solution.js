// eslint-disable-next-line no-extend-native
Object.prototype.hash = function getValue(path) {
  return path.split('.').reduce((acc, prop) => (acc ? acc[prop] : undefined), this);
};
