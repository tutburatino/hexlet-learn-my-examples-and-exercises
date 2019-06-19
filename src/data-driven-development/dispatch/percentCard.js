import { cons, car, cdr } from 'hexlet-pairs';
import { attach, contents } from '@hexlet/tagged-types';
import { definer } from './generic';

export default (name, percentDamage) => attach('PercentCard', cons(name, percentDamage / 100));


const defmethod = definer('PercentCard');

const damage = (card, health) => Math.round(health * cdr(card));
defmethod('damage', damage);

const getName = card => car(card);
defmethod('getName', getName);
