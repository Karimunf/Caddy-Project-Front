import { LigneCommandePK } from "./LigneCommandePK";

export class LigneCommande{
    id:LigneCommandePK;
    qte:number;
    prixUnitaire:number;
    prixTotal:number;
    etat:number;    
}