import { cons, car, cdr } from 'hexlet-pairs';
import { attach, contents } from '@hexlet/tagged-types';

const make = (name, points) => attach('SimpleCard', cons(name, points));

const damage = card => cdr(contents(card));

const getName = card => car(contents(card));

export { make, damage, getName };
