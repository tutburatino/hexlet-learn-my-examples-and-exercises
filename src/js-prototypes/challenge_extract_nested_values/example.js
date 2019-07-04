// eslint-disable-next-line no-extend-native
Object.prototype.hash = function getValue(path) {
  console.log(`!!!!!!!!!! this : ${JSON.stringify(this)}`);
  console.log(`!!!!!!!!!! path.split('.') : ${JSON.stringify(path.split('.'))}`);
  return path.split('.').slice(1).reduce((acc, prop) => acc[prop], this);
};

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

console.log(`obj.person.history.bio: ${JSON.stringify(obj.hash('obj.person.history.bio'))}`);

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
