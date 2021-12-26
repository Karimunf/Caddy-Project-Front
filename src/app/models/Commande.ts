import { Client } from "./Client";
import { LigneCommande } from "./LigneCommande";

export class Commande {
    numero: string;
    ligneCommandes: Array<LigneCommande>;
    date: Date;
    prixTotal: number;
    etat: number;
    constructor() {
        this.ligneCommandes = new Array();
    }
}