import { IUtente } from "./utente";

type TipoMezzo = "bici" | "scooter" | "monopattino";
type StatoMezzo = "disponibile" | "in uso";

export interface IMezzo {
  tipo: TipoMezzo;
  id: string;
  stato: StatoMezzo;
  assegnaUtente(utente: IUtente): void;
}

export class Mezzo implements IMezzo {
  tipo: TipoMezzo;
  id: string;
  stato: StatoMezzo;

  constructor(tipo: TipoMezzo, id: string) {
    this.tipo = tipo;
    this.id = id;
    this.stato = "disponibile";
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato === "disponibile") {
      this.stato = "in uso";
      console.log(
        `Il mezzo ${this.id} è stato assegnato all'utente ${utente.nome} ${utente.cognome}.`
      );
    } else {
      console.log(`Il mezzo ${this.id} non è disponibile.`);
    }
  }
}
