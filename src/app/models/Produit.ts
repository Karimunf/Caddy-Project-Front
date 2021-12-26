import { Categorie } from "./Categorie";
import { LigneCommande } from "./LigneCommande";

export class Produit{
    code:string;
    marque:string;
    modele:string;
    caracteristiques:string;
    prixUnitaire:number;
    quantite:number;
    ligneCommandes:Array<LigneCommande>;
    constructor(){
        this.ligneCommandes=new Array();
    }
}