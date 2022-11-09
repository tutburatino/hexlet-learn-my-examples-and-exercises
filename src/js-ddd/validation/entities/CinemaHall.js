import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator';
import ApplicationEntity from './ApplicationEntity';


export default class CinemaHall extends ApplicationEntity {
  static schema = yup.object({
    name: yup.string()
      .required()
      .min(2),
    rows: yup.number()
      .required()
      .integer()
      .positive(),
    cols: yup.number()
      .required()
      .integer()
      .positive(),
  });

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
