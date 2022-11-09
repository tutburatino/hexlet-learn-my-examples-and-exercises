import CinemaService from '../../../src/js-ddd/validation/services/CinemaService';
import MoneyService from '../../../src/js-ddd/validation/services/MoneyService';
import UserService from '../../../src/js-ddd/validation/services/UserService';
import * as repositories from '../../../src/js-ddd/validation/repositories';
import generateValidator from '../../../src/js-ddd/validation/lib/validator';

describe('MoneyService', () => {
  let moneyService;
  let cinemaService;
  let userService;
  let film;
  let cinemaHall;
  let filmScreening;
  let user;

  beforeEach(() => {
    const repositoryInstances = Object.keys(repositories)
      .reduce(
        (acc, name) => ({ [name]: new repositories[name](), ...acc }),
        {},
      );
    const validate = generateValidator(repositoryInstances);

    cinemaService = new CinemaService(repositoryInstances, validate);
    moneyService = new MoneyService(repositoryInstances, validate);
    userService = new UserService(repositoryInstances, validate);

    const email = 'etst@email.com';
    [user] = userService.createUser(email);
    [film] = cinemaService.createFilm('first glance', 100);
    [cinemaHall] = cinemaService.createCinemaHall('first', 5, 5);
    [filmScreening] = cinemaService
      .createFilmScreening(film.id, cinemaHall.id, new Date());
  });

  it('#1 create user with duplicate email', () => {
    const email = 'etst@email.com';
    const [, errors] = userService.createUser(email);
    const expected = {
      email: [
        'email already exists',
      ],
    };

    expect(errors).toMatchObject(expected);
  });

  it('#2 buyTicket', () => {
    const place = { row: 5, col: 3 };
    const [ticket] = moneyService.buyTicket(user.id, filmScreening.id, place);
    const ticketExpected = {
      place,
    };

    expect(ticket).toMatchObject(ticketExpected);
  });

  it('#3 buyTicket (Entity not found error)', () => {
    const f = () => moneyService.buyTicket();

    expect(f).toThrow();
  });

  it('#4 buyTicket with double reservation', () => {
    const place = { row: 5, col: 3 };
    moneyService.buyTicket(user.id, filmScreening.id, place);
    const [, errors] = moneyService.buyTicket(user.id, filmScreening.id, place);
    const expected = {
      filmScreening: [
        'filmScreening already exists',
      ],
    };

    expect(errors).toMatchObject(expected);
  });

  it('#5 buyTicket for the same filmscreening', () => {
    const place = { row: 5, col: 3 };
    moneyService.buyTicket(user.id, filmScreening.id, place);
    const nextPlace = { row: 5, col: 4 };
    const [, errors] = moneyService.buyTicket(user.id, filmScreening.id, nextPlace);
    expect(errors).toBeUndefined();
  });
});
