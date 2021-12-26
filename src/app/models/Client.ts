import { Commande } from "./Commande";

export class Client{
    code:string;
    commandes:Array<Commande>;
    prenom:string;
    dateNaissance:Date;
    adresse:string;
    ville:string;
    codePostal:number;
    tel:string;
    fax:string;
    gsm:string;
    email:string;
    constructor(){
        
    }
}