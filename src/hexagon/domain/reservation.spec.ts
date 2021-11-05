import { Reservation } from "./Reservation"

describe('Passer une reservation', () => {
  it('passe une réservation avec une date début, date de fin, nombre de voyageurs, numéro de chambre', () => {
    const reservation = new Reservation("2021-11-05", "2021-11-06", 2, 101)
    expect(reservation).toBeInstanceOf(Reservation)
  })

  it('passer une réservation avec moins d\'une nuit renvoie une erreur', () => {
    expect(() => new Reservation("2021-11-05", "2021-11-05", 2, 101)).toThrowError()
  })
})