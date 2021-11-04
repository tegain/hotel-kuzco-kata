import { Chambre } from '../../hexagon/chambre'

export const chambresFakeData = [
  new Chambre(1, 101, 'one king size bed', '2 guests'),
  new Chambre(1, 102, '2 queen size beds', '4 guests'),
  new Chambre(1, 103, '3 single beds', '3 guests')
]

export class ChambreFactory {
  static create (params?: Partial<Chambre>): Chambre {
    return new Chambre(
      params?.etage || 1,
      params?.chambre || 101,
      params?.description || 'one king size bed',
      params?.capacite || '2 guests')
  }
}
