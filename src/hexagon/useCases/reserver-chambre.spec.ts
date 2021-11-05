import { Reservation } from '../domain/Reservation';
import { StaticChambreRepository } from "../../serverSide/staticChambreRepository";
import { ChambreRepository } from "../domain/chambreRepository";
import { StaticReservationRepository } from '../../serverSide/staticReservationRepository'
import { ReservationRepository } from '../domain/reservationRepository'

class ReserverChambre {

  constructor(
    private chambreRepository: ChambreRepository,
    private reservationRepository: ReservationRepository,
    private notification: Notification,
    private logger: Logger
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
    this.envoyerEmailConfirmation("user@monapp.fr", "Confirmation de réservation", "blabla")
    this.envoyerNotificationSlack("user@monapp.fr", "Confirmation de réservation", "blabla")
    this.loggerLaReservation(reservation)
    return reservation;
  }

  envoyerEmailConfirmation() {
    const estCorrectementEnvoyé = this.notification.envoyerEmail(destinataire, objet, contenu)
  }

  envoyerNotificationSlack() {
    const estCorrectementEnvoyé = this.notification.envoyerSurSlack(destinataire, objet, contenu)
  }

  loggerLaReservation(reservation: Reservation) {
    const estCorrectementLoggé = this.logger.logger(reservation)
  }
}

describe('Réserver une chambre', () => {

  const chambreRepository = new StaticChambreRepository()
  const reservationRepository = new StaticReservationRepository()

  it('réserve une chambre', () => {
    jest.spyOn(reservationRepository, 'ajouterReservation')
    const expectedReservation = new Reservation("2021-11-06", "2021-11-07", 1, 101);
    const reservation = new ReserverChambre(chambreRepository, reservationRepository).reserver("2021-11-06", "2021-11-07", 1, 101);
    expect(expectedReservation).toStrictEqual(reservation)
    expect(reservationRepository.ajouterReservation).toHaveBeenCalledWith(reservation)
  })

  it('qui n\'existe pas, renvoie une erreur', () => {
    const reservation = new ReserverChambre(chambreRepository, reservationRepository).reserver("2021-11-06", "2021-11-07", 1, 8419);
    expect(reservation).toStrictEqual(new Error('chambre non trouvée'))
  })

  it(`qui est déjà réservée, renvoie une erreur`, () => {
    new ReserverChambre(chambreRepository, reservationRepository).reserver("2021-11-06", "2021-11-07", 1, 101);
    const reservation = new ReserverChambre(chambreRepository, reservationRepository).reserver("2021-11-06", "2021-11-07", 1, 101);
    expect(reservation).toStrictEqual(new Error('Chambre indisponible aux dates indiquées'))
  })

})
