import { Categorie } from "../models/Categorie";
import { Produit } from "../models/Produit";

export class ProduitCategorieDTO {
    produits: Array<Produit>;
    categorie: Categorie;
    constructor() {
        this.produits = new Array();
        this.categorie = new Categorie();
    }
}