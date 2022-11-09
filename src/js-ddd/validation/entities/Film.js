import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator';
import ApplicationEntity from './ApplicationEntity';

export default class Film extends ApplicationEntity {
  static schema = yup.object({
    name: yup.string().required(),
    duration: yup.number().required(),
  });

  constructor(name, duration) {
    super();
    this.id = uuid();
    this.name = name;
    this.duration = duration;
    this.createdAt = new Date();
  }
}
