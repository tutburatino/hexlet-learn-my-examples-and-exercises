// eslint-disable-next-line no-extend-native
Function.prototype.wrap = function wrap(func) {
  return (myName, yourName) => func(this, myName, yourName);
};
