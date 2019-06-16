import { cons, car, cdr } from 'hexlet-pairs';
import { attach, contents } from '@hexlet/tagged-types';

const make = (name, percentDamage) => attach('PercentCard', cons(name, percentDamage / 100));

const damage = (card, health) => Math.round(health * cdr(contents(card)));

const getName = card => car(contents(card));

export { make, damage, getName };
