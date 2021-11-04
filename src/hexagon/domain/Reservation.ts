export class Reservation {
  constructor(public dateDebut: string, public dateFin: string, public nbVoyageurs: number, public numeroChambre: number) {
    if (dateDebut == dateFin)
      throw new Error()
  }
}