import { Chambre } from "./chambre";

export interface ChambreRepository {
  recupererToutesLesChambres(): Chambre[]
  recupereChambreAvecNumero(numeroChambre: number): Chambre | null
}
