import * as yup from 'yup';
// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';

const toObject = (validationError) => {
  const { inner } = validationError;
  const grouped = _.groupBy(inner, 'path');
  const getMessage = error => error.message;
  return _.mapValues(
    grouped,
    errors => errors.map(getMessage),
  );
};

const schema = yup.object({
  username: yup.string()
    .required()
    .notOneOf(
      ['nicklas'],
      '"${value}" is not allowed',
    ),
  password: yup.string()
    .required()
    .min(6),
});

console.log('\n');

const check = (objects) => {
  objects.forEach((item, index) => {
    console.log(`index : ${index}`);
    console.log(`item : ${JSON.stringify(item)}`);
    console.log('\n');
    try {
      schema.validateSync(
        item,
        { abortEarly: false },
      );
    } catch (err) {
      // console.log(`err.inner : ${JSON.stringify(err.inner)}`);
      console.log('\n');
      // console.log(`toObject(err) : ${JSON.stringify(toObject(err))}`);
    }
    console.log('------------------------------------');
  });
};

const objectsForCheck = [
  { password: 'bad' },
  { username: 'nick', password: 'better' },
  { username: 'nicklas', password: 'better' },
  { password: 'better' },
];

check([objectsForCheck[0]]);

// export default class User {
//   static schema = yup.object({
//     email: yup.string()
//       .email(),
//     // .uniqueness(),
//   });

//   constructor(email) {
//     this.email = email;
//   }
// }

// const user1 = new User(1);

// console.log(user1);

const inner = [{
  path: 'username',
  type: 'required',
  errors: ['username is a required field'],
  params: { path: 'username' },
  inner: [],
  name: 'ValidationError',
  message: 'username is a required field',
}, {
  // value: 'bad',
  path: 'password',
  type: 'min',
  errors: ['password must be at least 6 characters'],
  params: {
    value: 'bad',
    originalValue: 'bad',
    path: 'password',
    min: 6,
  },
  inner: [],
  name: 'ValidationError',
  message: 'password must be at least 6 characters',
}];

const grouped = _.groupBy(inner, 'path');

console.log(`grouped : ${JSON.stringify(grouped)}`);
console.log('\n');

const getMessage = error => error.message;

const result = _.mapValues(
  grouped,
  errors => errors.map(getMessage),
);

console.log(result);
