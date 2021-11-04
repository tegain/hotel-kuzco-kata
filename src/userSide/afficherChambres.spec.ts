import { AfficherChambresEnConsole } from './afficherChambresEnConsole'
import { ChambreFactory, } from '../test/data/chambres'

describe('Afficher la liste des chambres', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  describe(`Si aucune chambre n'est disponible`, () => {
    it(`On n'affiche un message indiquant qu'il n'y a rien`, () => {
      jest.spyOn(console, 'log')
      const chambres = []
      new AfficherChambresEnConsole(chambres).afficher();
      expect(console.log).toHaveBeenCalledWith(`
Il n'y a aucune chambre disponible.
`);
    })
  })


  it('affiche la liste des chambres', () => {
    jest.spyOn(console, 'log')
    const chambres = [
      ChambreFactory.create(),
      ChambreFactory.create({ chambre: 102, description: '2 queen size beds', capacite: '4 guests' }),
      ChambreFactory.create({ chambre: 103, description: '3 single beds', capacite: '3 guests' }),
    ]
    new AfficherChambresEnConsole(chambres).afficher();
    expect(console.log).toHaveBeenCalledWith(`
| Etage | Chambre | Description                                                                | Capacité |
|:-----:|:-------:|----------------------------------------------------------------------------|:--------:|
    |   1   | 101     | one king size bed   | 2 guests |
|   1   | 102     | 2 queen size beds   | 4 guests |
|   1   | 103     | 3 single beds   | 3 guests |
`);
  })
})
