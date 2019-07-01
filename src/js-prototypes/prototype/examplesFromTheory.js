const obj = new Object();
console.log(`typeof Object : ${typeof Object}`);
const proto = Object.getPrototypeOf(obj);
console.log(`Object.getOwnPropertyNames(proto) : ${Object.getOwnPropertyNames(proto)}`);
console.log(`Object.getOwnPropertyNames(Object.prototype) === proto: ${Object.prototype === proto}`);
console.log(`Array.prototype : ${Object.getOwnPropertyNames(Array.prototype)}`);
