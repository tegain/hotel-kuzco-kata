import { Reservation } from './Reservation'

export interface ReservationRepository {
  ajouterReservation(reservation: Reservation): void
  verifierDisponibiliteDeLaChambre (numeroChambre: number, dateDebut: string, dateFin: string): boolean
}
