import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line


const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList({ ...head(log), message:`${name1} был убит` }, log);
    }
    const card = customRandom(cards);
    const damage = card.damage(health2)
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${card.name}' против '${name2}' и нанес урон '${damage}'`;

    const newHealth1 = order === 1 ? health1 : newHealth;
    const newHealth2 = order === 2 ? health1 : newHealth;
    const newLogItem = {
      health1: newHealth1,
      health2: newHealth2,
      message
    };
    const newLog = consList(newLogItem, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = { 
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!'
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => {
  const inner = (name1, name2) => run(name1, name2, cards, customRandom);
  return inner;
};
