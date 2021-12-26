import { Produit } from "./Produit";

export class Categorie{
    code:string;
    produits:Array<Produit>=new Array();
    libelle:string;
    constructor(){
    }
}