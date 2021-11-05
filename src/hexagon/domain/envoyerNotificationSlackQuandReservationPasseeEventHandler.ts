import { EventHandler } from '../libs/eventHandler'
import { DomainEvent } from '../libs/domainEvent'
import { ReservationPasseeEvenement } from './reservationPasseeEvenement'

export class EnvoyerNotificationSlackQuandReservationPasseeEventHandler implements EventHandler {
  constructor (private notification: Notification) {
  }

  handle(event: ReservationPasseeEvenement) {
    this.notification.envoyerSurSlack(destinataire, objet, contenu)
  }

  listenTo() {
    return 'RESERVATION_COMPLETE'
  }
}
