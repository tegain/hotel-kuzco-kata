import { Reservation } from '../domain/Reservation';
import { StaticChambreRepository } from "../../serverSide/staticChambreRepository";
import { StaticReservationRepository } from '../../serverSide/staticReservationRepository'
import { ReserverChambre } from './reserver-chambre'
import { ImplReservationEventBus } from './ImplReservationEventBus'

describe('Réserver une chambre', () => {

  const chambreRepository = new StaticChambreRepository()
  const reservationRepository = new StaticReservationRepository()

  it('réserve une chambre', () => {
    jest.spyOn(reservationRepository, 'ajouterReservation')
    const expectedReservation = new Reservation("2021-11-06", "2021-11-07", 1, 101);
    const reservation = new ReserverChambre(chambreRepository, reservationRepository, new ImplReservationEventBus()).reserver("2021-11-06", "2021-11-07", 1, 101);
    expect(expectedReservation).toStrictEqual(reservation)
    expect(reservationRepository.ajouterReservation).toHaveBeenCalledWith(reservation)
  })

  it('qui n\'existe pas, renvoie une erreur', () => {
    const reservation = new ReserverChambre(chambreRepository, reservationRepository, new ImplReservationEventBus()).reserver("2021-11-06", "2021-11-07", 1, 8419);
    expect(reservation).toStrictEqual(new Error('chambre non trouvée'))
  })

  it(`qui est déjà réservée, renvoie une erreur`, () => {
    new ReserverChambre(chambreRepository, reservationRepository, new ImplReservationEventBus()).reserver("2021-11-06", "2021-11-07", 1, 101);
    const reservation = new ReserverChambre(chambreRepository, reservationRepository, new ImplReservationEventBus()).reserver("2021-11-06", "2021-11-07", 1, 101);
    expect(reservation).toStrictEqual(new Error('Chambre indisponible aux dates indiquées'))
  })

})
