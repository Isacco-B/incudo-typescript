import { Citta } from "./citta";
import { Mezzo } from "./mezzo";
import { Utente } from "./utente";

const bici1 = new Mezzo("bici", "B1");
const bici2 = new Mezzo("bici", "B2");
const scooter1 = new Mezzo("scooter", "S1");
const monopattino1 = new Mezzo("monopattino", "M1");

const utente1 = new Utente(
  "Luca",
  "Rossi",
  "luca.rossi@example.com",
  "carta di credito"
);
const utente2 = new Utente(
  "Maria",
  "Bianchi",
  "maria.bianchi@example.com",
  "PayPal"
);

const utente3 = new Utente(
  "Giulia",
  "Lorenzini",
  "giulia.lorenzini@example.com",
  "PayPal"
);

const cittaMilano = new Citta("Milano");
const cittaRoma = new Citta("Roma");
const cittaNapoli = new Citta("Napoli");

cittaMilano.aggiungiMezzo(bici1);
cittaMilano.aggiungiMezzo(bici1);
cittaMilano.aggiungiMezzo(scooter1);

cittaRoma.aggiungiMezzo(monopattino1);

cittaNapoli.aggiungiMezzo(bici2);

utente1.prenotaMezzo(bici1);
utente2.prenotaMezzo(scooter1);
utente3.prenotaMezzo(scooter1);
