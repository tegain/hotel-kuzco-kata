import { Chambre } from "./chambre";

export interface ChambreRepository {
  recupererToutesLesChambres(): Chambre[]
}