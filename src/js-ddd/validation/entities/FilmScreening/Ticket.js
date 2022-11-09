import { v4 as uuid } from 'uuid';
import ApplicationEntity from '../ApplicationEntity';
import { yup } from '../../lib/validator';


export default class Ticket extends ApplicationEntity {
  static schema = yup.object({
    filmScreening: yup.mixed().required()
      .uniqueness({ scope: ['place'] }),
    user: yup.mixed().required(),
    place: yup.mixed().required(),
  });

  constructor(user, filmScreening, place) {
    super();
    this.id = uuid();
    this.user = user;
    this.filmScreening = filmScreening;
    this.place = place;
    this.createdAt = new Date();
  }
}
