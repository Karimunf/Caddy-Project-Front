import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeClientDTO } from 'src/app/dtos/CommandeClientDTO';
import { ProduitCategorieDTO } from 'src/app/dtos/ProduitCategorieDTO';
import { Categorie } from 'src/app/models/Categorie';
import { Commande } from 'src/app/models/Commande';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { LigneCommandePK } from 'src/app/models/LigneCommandePK';
import { Produit } from 'src/app/models/Produit';
import { CaddyService } from 'src/app/services/caddy.service';
import { CommandeService } from 'src/app/services/commande.service';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {
  produits: Map<Produit, number> = new Map();
  @Input("categories") categories: Array<Categorie>;
  private commande: Commande;
  private ligneCommandes: Array<LigneCommande>;

  constructor(private caddyService: CaddyService, private commandeService: CommandeService,
    private produitService: ProduitService,private router:Router) { }

  ngOnInit(): void {
    this.caddyService.getPanier().subscribe((tuple) => {
      let produit = tuple['produit'];
      let qteOriginal = tuple['qteOriginal'];
      let isPush = tuple['isPush'];
      if (!this.produits.has(produit)) {
        this.produits.set(produit, qteOriginal - produit.quantite);
      } else {
        if (isPush) {
          this.produits.set(produit, this.produits.get(produit) + 1);
        } else {
          this.produits.set(produit, this.produits.get(produit) - 1);
          if (this.produits.get(produit) === 0) {
            this.produits.delete(produit);
          }
        }
      }
    });
  }


  prixTotal() {
    let res = 0;
    this.produits.forEach((v, k) => {
      res += (v * k.prixUnitaire)
    })
    return res;
  }

  validerCommande() {
    this.prepareCommande();
  }

  private prepareCommande(): void {
    this.commande = new Commande();
    this.commande.date = new Date();
    this.commande.etat = 1;
    this.commande.prixTotal = this.prixTotal();
    this.prepareLigneCommandes();
  }

  private prepareLigneCommandes(): void {
    this.ligneCommandes = new Array();
    this.produits.forEach((v, k) => {
      let ligneCommande = new LigneCommande();
      let ligneCommandePK = new LigneCommandePK();
      ligneCommandePK.codeProduit=k.code;
      ligneCommande.id = ligneCommandePK;
      ligneCommande.etat = this.commande.etat;
      ligneCommande.prixTotal = this.commande.prixTotal;
      ligneCommande.prixUnitaire = k.prixUnitaire;
      ligneCommande.qte = v;
      this.ligneCommandes.push(ligneCommande);
    })
    this.commande.ligneCommandes = this.ligneCommandes;
    this.addCommande();
  }

  private addCommande() {
    let commandeClientDTO = new CommandeClientDTO();
    let client = JSON.parse(sessionStorage.getItem('client'));
    commandeClientDTO.client=client;
    commandeClientDTO.commande=this.commande;
    this.commandeService.ajouterCommande(commandeClientDTO).subscribe(data => {
      this.commande=data;
      this.updateProduits();
    }, err => {
    })
    
  }

  private updateProduits() {
    let map = new Map<Categorie, Array<Produit>>();
    for (let i = 0; i < this.categories.length; ++i) {
      map.set(this.categories[i], new Array());
    }
    this.produits.forEach((v, k) => {
      map.get(this.findProduitCategorie(k)).push(k);
    })
    let arrOfProduitsCategoriesDTO = new Array<ProduitCategorieDTO>();
    map.forEach((v, k) => {
      let temp = new ProduitCategorieDTO();
      temp.categorie = k;
      temp.produits = v;
      arrOfProduitsCategoriesDTO.push(temp)
    })
    this.produitService.ajouterProduits(arrOfProduitsCategoriesDTO).subscribe(data => {
    })
  }

  private findProduitCategorie(produit: Produit) {
    for (let i = 0; i < this.categories.length; ++i) {
      for (let j = 0; j < this.categories[i].produits.length; ++j) {
        if (produit.code === this.categories[i].produits[j].code) {
          return this.categories[i];
        }
      }
    }
  }
}
