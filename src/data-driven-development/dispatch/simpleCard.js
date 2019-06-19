import { cons, car, cdr } from 'hexlet-pairs';
import { attach } from '@hexlet/tagged-types';
import { definer } from './generic';

export default (name, points) => attach('SimpleCard', cons(name, points));


const defMethod = definer('SimpleCard');

const damage = card => cdr(card);
defMethod('damage', damage);

const getName = card => car(card);
defMethod('getName', getName);
