import cinemaManager from '../../../../src/js-ddd/container';

describe('CinemaService', () => {
  let service;
  beforeEach(() => {
    const app = cinemaManager();
    service = app.services.cinema;
  });

  it('#1 createFilm', () => {
    const [film] = service.createFilm('first glance', 100);
    const expected = {
      name: 'first glance',
      duration: 100,
    };
    expect(film).toMatchObject(expected);
  });

  it('#2 createFilm (errors)', () => {
    const [, errors] = service.createFilm();
    const expected = {
      duration: ['duration is a required field'],
      name: ['name is a required field'],
    };
    expect(errors).toMatchObject(expected);
  });

  it('#3 createCinemaHall', () => {
    const [cinemaHall] = service.createCinemaHall('first', 5, 5);
    const expected = {
      name: 'first',
      rows: 5,
      cols: 5,
    };
    expect(cinemaHall).toMatchObject(expected);
  });

  it('#4 createCinemaHall (errors)', () => {
    const [, errors] = service.createCinemaHall();
    const expected = {
      name: ['name is a required field'],
    };
    expect(errors).toMatchObject(expected);
  });

  it('#5 createFilmScreening', () => {
    const time = new Date();
    const [film] = service.createFilm('first glance', 100);
    const [cinemaHall] = service.createCinemaHall('first', 5, 5);
    const [filmScreening] = service.createFilmScreening(film.id, cinemaHall.id, time);

    const expected = {
      film,
      cinemaHall,
      time,
    };
    expect(filmScreening).toMatchObject(expected);
  });

  it('#6 createFilmScreening (errors)', () => {
    const f = () => service.createFilmScreening();
    expect(f).toThrow();
  });
});
