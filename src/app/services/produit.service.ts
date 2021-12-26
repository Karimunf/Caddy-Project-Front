import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitCategorieDTO } from '../dtos/ProduitCategorieDTO';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url: string = "http://localhost:8080/produits"
  constructor(private http_client: HttpClient) { }

  ajouterProduits(produitsCategorieDTO:Array<ProduitCategorieDTO>):Observable<any> {
    return this.http_client.post(this.url, produitsCategorieDTO);
  }
}
