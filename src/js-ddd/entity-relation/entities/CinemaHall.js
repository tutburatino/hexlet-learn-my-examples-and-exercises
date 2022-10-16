// @ts-check

import { v4 as uuid } from 'uuid';
import ApplicationEntity from './ApplicationEntity';

export default class CinemaHall extends ApplicationEntity {
  constructor(name, rows, cols) {
    super();
    this.id = uuid();
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.filmScreenings = [];
    this.createdAt = new Date();
  }

  addFilmScreening(filmScreening) {
    this.filmScreenings.push(filmScreening);
  }
}
