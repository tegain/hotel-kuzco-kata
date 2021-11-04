import { Chambre } from "../hexagon/domain/chambre";
import { ChambreRepository } from "../hexagon/domain/chambreRepository";

export class StaticChambreRepository implements ChambreRepository {

  static chambres = [
    new Chambre(1, 101, "one king size bed", "2 guests"),
    new Chambre(1, 102, "2 queen size beds", "4 guests"),
    new Chambre(1, 103, "3 single beds", "3 guests")
  ]

  recupererToutesLesChambres(): Chambre[] {
    return StaticChambreRepository.chambres
  }

  recupereChambreAvecNumero(numeroChambre: number): Chambre | null {
    return StaticChambreRepository.chambres.find(chambre => chambre.chambre === numeroChambre)
  }
}
