// Function.prototype.wrap = function wrap(func) {
//   return (your, my) => func(speak, your, my);
// };

// function speak(name) {
//   return `Hello ${name}`;
// }

// const newSpeak = speak.wrap((original, yourName, myName) => {
//   const greeting = original(yourName);
//   return `${greeting}, my name is ${myName}`;
// });

// Hello Mary, my name is Kate

// console.log(`newSpeak('Mary', 'Kate'): ${newSpeak('Mary', 'Kate')}`);

// console.log(`Object.getPrototypeOf(speak): ${Object.getPrototypeOf(speak)}`);
