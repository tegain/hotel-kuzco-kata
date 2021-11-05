import { ChambreRepository } from '../domain/chambreRepository'
import { ReservationRepository } from '../domain/reservationRepository'
import { Reservation } from '../domain/Reservation'
import { ImplReservationEventBus } from './ImplReservationEventBus'

export class ReserverChambre {

  constructor(
    private chambreRepository: ChambreRepository,
    private reservationRepository: ReservationRepository,
    private reservationEventBus: ImplReservationEventBus,
  ) {
  }

  reserver(dateDebut: string, dateFin: string, nbVoyageurs: number, numeroChambre: number): any {
    const chambre = this.chambreRepository.recupereChambreAvecNumero(numeroChambre)
    if (chambre == null) {
      return new Error('chambre non trouvée');
    }
    const laChambreEstDispo = this.reservationRepository.verifierDisponibiliteDeLaChambre(numeroChambre, dateDebut, dateFin)
    if (!laChambreEstDispo) {
      return new Error('Chambre indisponible aux dates indiquées')
    }
    const reservation = new Reservation(dateDebut, dateFin, nbVoyageurs, numeroChambre);
    this.reservationRepository.ajouterReservation(reservation);
    reservation.events.forEach((event) => {
      this.reservationEventBus.dispatch(event)
    })
    return reservation;
  }

  // envoyerEmailConfirmation() {
  //   const estCorrectementEnvoyé = this.notification.envoyerEmail(destinataire, objet, contenu)
  // }
  //
  // envoyerNotificationSlack() {
  //   const estCorrectementEnvoyé = this.notification.envoyerSurSlack(destinataire, objet, contenu)
  // }
  //
  // loggerLaReservation(reservation: Reservation) {
  //   const estCorrectementLoggé = this.logger.logger(reservation)
  // }
}
