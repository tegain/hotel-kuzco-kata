import { DomainEvent } from '../libs/domainEvent'
import { ReservationPasseeEvenement } from './reservationPasseeEvenement'

export class Reservation {
  public events: DomainEvent[] = []

  constructor(public dateDebut: string, public dateFin: string, public nbVoyageurs: number, public numeroChambre: number) {
    if (dateDebut == dateFin)
      throw new Error()

    this.events.push(new ReservationPasseeEvenement(this))
  }
}
