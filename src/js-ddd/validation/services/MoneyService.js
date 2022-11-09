import ApplicationService from './ApplicationService';
import { FilmScreeningTicket } from '../entities';

export default class MoneyService extends ApplicationService {
  constructor(repositories, validate) {
    super(repositories);
    this.validate = validate;
    this.ticketCounter = 0;
  }

  buyTicket(userId, filmScreeningId, place) {
    const user = this.UserRepository.find(userId);
    const filmScreening = this.FilmScreeningRepository.find(filmScreeningId);
    const ticket = new FilmScreeningTicket(user, filmScreening, place);
    const errors = this.validate(ticket);
    if (!errors) {
      this.TicketRepository.save(ticket);
    }
    this.ticketCounter = this.ticketCounter + 1;
    return [ticket, errors];
  }
}
