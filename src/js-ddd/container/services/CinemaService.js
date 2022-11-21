import ApplicationService from './ApplicationService';
import { Film, CinemaHall, FilmScreening } from '../entities';

export default class CinemaService extends ApplicationService {
  constructor(repositories, validate) {
    super(repositories);
    this.validate = validate;
  }

  createFilm(name, duration) {
    const film = new Film(name, duration);
    const errors = this.validate(film);

    if (!errors) {
      this.filmRepository.save(film);
    }
    return [film, errors];
  }

  createCinemaHall(name, rows, cols) {
    const cinemaHall = new CinemaHall(name, rows, cols);
    const errors = this.validate(cinemaHall);

    if (!errors) {
      this.cinemaHallRepository.save(cinemaHall);
    }
    return [cinemaHall, errors];
  }

  createFilmScreening(filmId, cinemaHallId, time) {
    const film = this.filmRepository.find(filmId);
    const cinemaHall = this.cinemaHallRepository.find(cinemaHallId);

    const filmScreening = new FilmScreening(film, cinemaHall, time);
    const errors = this.validate(filmScreening);

    if (!errors) {
      this.filmScreeningRepository.save(filmScreening);
    }
    return [filmScreening, errors];
  }
}
