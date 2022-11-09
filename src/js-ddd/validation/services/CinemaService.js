import { Film, CinemaHall, FilmScreening } from '../entities';
import ApplicationService from './ApplicationService';

export default class CinemaService extends ApplicationService {
  constructor(repositories, validate) {
    super(repositories);
    this.validate = validate;
  }

  createFilm(name, duration) {
    const film = new Film(name, duration);
    const errors = this.validate(film);
    if (!errors) {
      this.FilmRepository.save(film);
    }
    return [film, errors];
  }

  createCinemaHall(name, rows, cols) {
    const cinemaHall = new CinemaHall(name, rows, cols);
    const errors = this.validate(cinemaHall);
    if (!errors) {
      this.CinemaHallRepository.save(cinemaHall);
    }
    return [cinemaHall, errors];
  }

  createFilmScreening(filmId, cinemaHallId, time) {
    const film = this.FilmRepository.find(filmId);
    const cinemaHall = this.CinemaHallRepository.find(cinemaHallId);
    const filmScreening = new FilmScreening(film, cinemaHall, time);
    const errors = this.validate(filmScreening);
    if (!errors) {
      this.FilmScreeningRepository.save(filmScreening);
    }
    return [filmScreening, errors];
  }
}
