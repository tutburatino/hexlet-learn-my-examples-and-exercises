// @ts-check

import CinemaService from '../../../src/js-ddd/architecture/services/CinemaService';
import * as repositories from '../../../src/js-ddd/architecture/repositories';

describe('CinemaService', () => {
  let service;

  beforeEach(() => {
    const repositoryInstances = Object.keys(repositories).reduce((acc, name) => (
      { [name]: new repositories[name](), ...acc }), {});
    service = new CinemaService(repositoryInstances);
  });

  it('createFilm', () => {
    const film = service.createFilm('first glance', 100);
    const expected = {
      name: 'first glance',
      duration: 100,
    };
    expect(film).toMatchObject(expected);
  });

  it('createCinemaHall', () => {
    const cinemaHall = service.createCinemaHall('first', 5, 5);
    const expected = {
      name: 'first',
      rows: 5,
      cols: 5,
    };
    expect(cinemaHall).toMatchObject(expected);
  });
});
