import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator';
import ApplicationEntity from './ApplicationEntity';

export default class CinemaHall extends ApplicationEntity {
  static schema = yup.object({
    name: yup.string().required().min(3),
    rows: yup.number().positive().integer(),
    cols: yup.number().positive().integer(),
  });

  constructor(name, rows, cols) {
    super();
    this.id = uuid();
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.createdAt = new Date();
  }
}
