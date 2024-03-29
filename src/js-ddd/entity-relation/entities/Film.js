// @ts-check

import { v4 as uuid } from 'uuid';
import ApplicationEntity from './ApplicationEntity';

export default class Film extends ApplicationEntity {
  constructor(name, duration) {
    super();
    this.id = uuid();
    this.name = name;
    this.duration = duration;
    this.createdAt = new Date();
  }
}
