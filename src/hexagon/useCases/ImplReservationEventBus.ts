import { DomainEvent } from '../libs/domainEvent'
import { EventHandler } from '../libs/eventHandler'
import { EnvoyerNotificationSlackQuandReservationPasseeEventHandler } from '../domain/envoyerNotificationSlackQuandReservationPasseeEventHandler'
import { LoggerQuandReservationPasseeEventHandler } from '../domain/loggerQuandReservationPasseeEventHandler'

export class ImplReservationEventBus {
  private handlers: EventHandler[]

  constructor () {
    this.handlers = [
      new EnvoyerNotificationSlackQuandReservationPasseeEventHandler(),
      new LoggerQuandReservationPasseeEventHandler()
    ]
  }

  dispatch(event: DomainEvent) {
    this.handlers.forEach((handler) => {
      if (handler.listenTo() === event.getName()) {
        handler.handle(event)
      }
    })
  }
}
