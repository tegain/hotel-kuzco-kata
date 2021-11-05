import { DomainEvent } from './domainEvent'

export interface EventHandler {
  handle(event: DomainEvent): void
  listenTo(): string
}
