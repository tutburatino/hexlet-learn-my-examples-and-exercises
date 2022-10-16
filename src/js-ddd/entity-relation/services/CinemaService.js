import ApplicationService from './ApplicationService';
import { Film, CinemaHall, FilmScreening } from '../entities/index';

export default class CinemaService extends ApplicationService {
  // BEGIN (write your solution here)
  // eslint-disable-next-line no-useless-constructor
  constructor(repositoryInstances) {
    super(repositoryInstances);
  }

  createCinemaHall(name, rows, cols) {
    const cinemaHall = new CinemaHall(name, rows, cols);
    this.CinemaHallRepository.save(cinemaHall);
    return cinemaHall;
  }

  createFilmScreening(filmId, cinemaHallId, time) {
    const film = this.FilmRepository.find(filmId);
    const cinemaHall = this.CinemaHallRepository.find(cinemaHallId);
    const filmScreening = new FilmScreening(film, cinemaHall, time);
    this.FilmScreeningRepository.save(filmScreening);
    return filmScreening;
  }

  findFilmScreening(id) {
    return this.FilmScreeningRepository.find(id);
  }
  // END

  createFilm(name, duration) {
    const film = new Film(name, duration);
    this.FilmRepository.save(film);
    return film;
  }
}
