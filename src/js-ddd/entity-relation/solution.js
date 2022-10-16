// @ts-check
import CinemaService from './services/CinemaService';
import * as repositories from './repositories';

export default (filmName, duration, cinemaHallName, rows, cols, time) => {
  // BEGIN (write your solution here)
  const repositoryInstances = Object.keys(repositories).reduce((acc, name) => (
    { [name]: new repositories[name](), ...acc }), {});
  const service = new CinemaService(repositoryInstances);

  const film = service.createFilm(filmName, duration);
  const cinemaHall = service.createCinemaHall(cinemaHallName, rows, cols);
  const filmScreening = service.createFilmScreening(film.id, cinemaHall.id, time);
  const screening = service.findFilmScreening(filmScreening.id);
  return screening;
  // END
};
