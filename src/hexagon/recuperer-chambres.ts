import { ChambreRepository } from './chambreRepository';
import { Chambre } from './chambre'

export class RecupererChambres {
  constructor(public maSourceDeDonnees: ChambreRepository) {

  }

  recupererChambres(): Chambre[] {
    return this.maSourceDeDonnees.recupererToutesLesChambres()
  }
}
