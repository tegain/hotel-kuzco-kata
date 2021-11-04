import { ReservationRepository } from '../hexagon/domain/reservationRepository'
import { Reservation } from '../hexagon/domain/Reservation'

export class StaticReservationRepository implements ReservationRepository {
  static reservations: Reservation[] = []

  ajouterReservation (reservation: Reservation): void {
    StaticReservationRepository.reservations.push(reservation)
  }

  verifierDisponibiliteDeLaChambre (numeroChambre: number, dateDebut: string, dateFin: string): boolean {
    return !StaticReservationRepository.reservations.some((reservation) =>
      reservation.numeroChambre === numeroChambre && reservation.dateDebut === dateDebut && reservation.dateFin === dateFin);
  }
}
