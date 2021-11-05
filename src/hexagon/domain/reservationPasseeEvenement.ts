import { Reservation } from './Reservation'
import { DomainEvent } from '../libs/domainEvent'

export class ReservationPasseeEvenement implements DomainEvent {
  constructor (private reservation: Reservation) {
  }

  getName(): string {
    return 'RESERVATION_COMPLETE'
  }
}
