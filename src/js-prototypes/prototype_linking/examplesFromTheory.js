
// eslint-disable-next-line lodash-fp/prefer-constant
function Hu() {
  return 'Just!';
}

const myObj = new Hu();

console.log(`Object.getPrototypeOf(myObj) === Hu.prototype : ${Object.getPrototypeOf(myObj) === Hu.prototype}`);

// const obj = new Object();
// console.log(`typeof Object : ${typeof Object}`);
// const proto = Object.getPrototypeOf(obj);
// console.log(`Object.getOwnPropertyNames(proto) : ${Object.getOwnPropertyNames(proto)}`);
// console.log(`Array.prototype : ${Object.getOwnPropertyNames(Array.prototype)}`);
