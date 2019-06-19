import {
  l, cons as consList, filter, head, toString as listToString,
} from 'hexlet-pairs-data';
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
import { attach, typeTag, contents } from '@hexlet/tagged-types';


let methods = l();

export const definer = type => (funcName, funcBody) => {
  const newMethod = attach(type, cons(funcName, funcBody)); 
  methods = consList(newMethod, methods);
};

export const getMethod = (card, funcName) => {
  const filtered = filter(n => ((typeTag(n) === typeTag(card)) && (car(contents(n)) === funcName)), methods);
  const funcBody = cdr(contents(head(filtered)));
  return funcBody;
};