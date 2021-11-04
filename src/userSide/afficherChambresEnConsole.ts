import { Chambre } from '../hexagon/domain/chambre'

export class AfficherChambresEnConsole {

  static header = `
| Etage | Chambre | Description                                                                | Capacité |
|:-----:|:-------:|----------------------------------------------------------------------------|:--------:|
    `

  constructor (public chambres: Chambre[]) {
  }

  afficher() {
    if (this.chambres.length === 0) {
      console.log(`
Il n'y a aucune chambre disponible.
`)
      return;
    }

    let result = AfficherChambresEnConsole.header
    this.chambres.forEach(chambre => {
      result += `|   ${chambre.etage}   | ${chambre.chambre}     | ${chambre.description}   | ${chambre.capacite} |\n`
    })
    console.log(result)
  }
}
