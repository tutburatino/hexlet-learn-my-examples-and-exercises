import ApplicationService from './ApplicationService';
import { User } from '../entities';

export default class UserService extends ApplicationService {
  constructor(repositories, validate) {
    super(repositories);
    this.validate = validate;
  }

  createUser(email) {
    const user = new User(email);
    const errors = this.validate(user);
    if (!errors) {
      this.UserRepository.save(user);
    }
    return [user, errors];
  }
}
