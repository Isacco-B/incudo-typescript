import { IMezzo } from "./mezzo";

interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

export class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string) {
    this.nome = nome;
    this.mezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    if (this.mezziDisponibili.some((m) => m.id === mezzo.id)) {
      console.log(
        `Il mezzo ${mezzo.id} è già presente nella città di ${this.nome}.`
      );
      return;
    }
    this.mezziDisponibili.push(mezzo);
    console.log(
      `Il mezzo ${mezzo.id} è stato aggiunto alla città di ${this.nome}.`
    );
  }
}
