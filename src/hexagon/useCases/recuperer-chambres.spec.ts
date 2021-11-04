import { Chambre } from '../domain/chambre';
import { RecupererChambres } from "./recuperer-chambres"
import { StaticChambreRepository } from '../../serverSide/staticChambreRepository';

describe('Récupérer la liste des chambres', () => {
  it('récupère la liste des chambres', () => {
    const expectedChambres = [
      new Chambre(1, 101, "one king size bed", "2 guests"),
      new Chambre(1, 102, "2 queen size beds", "4 guests"),
      new Chambre(1, 103, "3 single beds", "3 guests")
    ]

    const chambres = new RecupererChambres(new StaticChambreRepository()).recupererChambres()

    expect(chambres).toStrictEqual(expectedChambres)
  })
})
