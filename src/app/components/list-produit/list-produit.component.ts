import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/Produit';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  @Input("produits") produits:Array<Produit>;
  constructor() { }

  ngOnInit(): void {
  }

}
