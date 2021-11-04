import {Reservation} from '../domain/Reservation';
import {StaticChambreRepository} from "../../serverSide/staticChambreRepository";
import {ChambreRepository} from "../domain/chambreRepository";

class ReserverChambre {

  constructor(private chambreRepository: ChambreRepository) {
  }

  reserver(dateDebut: string, dateFin: string, nbVoyageurs: number, numeroChambre: number): any {
    const chambre = this.chambreRepository.recupereChambreAvecNumero(numeroChambre)
    if (chambre == null) {
      return new Error('chambre non trouvée');
    }
    return new Reservation(dateDebut, dateFin, nbVoyageurs, numeroChambre);
  }
}

describe('Réserver une chambre', () => {

  const chambreRepository = new StaticChambreRepository()

  it('réserve une chambre', () => {

    const expectedReservation =

      new Reservation("2021-11-06", "2021-11-07", 1, 101);


    const reservation = new ReserverChambre(chambreRepository).reserver("2021-11-06", "2021-11-07", 1, 101);


    expect(expectedReservation).toStrictEqual(reservation)

  })


  it('qui n\'existe pas, renvoie une erreur', () => {

    const reservation = new ReserverChambre(chambreRepository).reserver("2021-11-06", "2021-11-07", 1, 8419);


    expect(reservation).toStrictEqual(new Error('chambre non trouvée'))

  })


})
