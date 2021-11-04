import { ChambreRepository } from '../domain/chambreRepository';
import { Chambre } from '../domain/chambre'

export class RecupererChambres {
  constructor(public maSourceDeDonnees: ChambreRepository) {
  }

  recupererChambres(): Chambre[] {
    return this.maSourceDeDonnees.recupererToutesLesChambres()
  }
}
