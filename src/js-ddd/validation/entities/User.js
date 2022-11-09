import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator';
import ApplicationEntity from './ApplicationEntity';

export default class User extends ApplicationEntity {
  static schema = yup.object({
    email: yup.string().required().email().uniqueness(),
  });

  constructor(email) {
    super();
    this.id = uuid();
    this.email = email;
    this.createdAt = new Date();
  }
}
