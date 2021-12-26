import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/Produit';
import { CaddyService } from 'src/app/services/caddy.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input("produit") produit: Produit;
  produitMock: Produit = new Produit();
  constructor(private caddyService: CaddyService) { }

  ngOnInit(): void {
    this.produitMock.code = this.produit.code;
    this.produitMock.caracteristiques = this.produit.caracteristiques;
    this.produitMock.marque = this.produit.marque;
    this.produitMock.modele = this.produit.modele;
    this.produitMock.prixUnitaire = this.produit.prixUnitaire;
    this.produitMock.quantite = this.produit.quantite;
  }

  ajouterAuPanier() {
    this.produitMock.quantite--;
    this.caddyService.ajouterAuPanier(this.produitMock, this.produit.quantite);
  }

  retirerDuPanier() {
    this.produitMock.quantite++;
    this.caddyService.retirerDuPanier(this.produitMock, this.produit.quantite);
  }
}
