import { EventHandler } from '../libs/eventHandler'
import { ReservationPasseeEvenement } from './reservationPasseeEvenement'

export class LoggerQuandReservationPasseeEventHandler implements EventHandler {
  constructor (private notification: Notification) {
  }

  handle(event: ReservationPasseeEvenement) {
    this.notification.envoyerSurSlack(destinataire, objet, contenu)
  }

  listenTo() {
    return 'RESERVATION_COMPLETE'
  }
}
