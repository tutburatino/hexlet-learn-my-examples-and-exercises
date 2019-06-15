import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      return consList(head(log), log);
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const newHealth = health2 - damage;
    const message = `Player ${name1} used card ${cardName} and damaged ${damage} to player ${name2}`;
    const round = order === 1 ? cons(health1, newHealth) : cons(newHealth, health1);
    const newLogItem = cons(round, message);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, consList(newLogItem, log));
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards => (name1, name2) => run(name1, name2, cards);
