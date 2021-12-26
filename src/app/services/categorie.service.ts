import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url: string = "http://localhost:8080/categories";
  constructor(private http_client: HttpClient) { }

  getAllCategories(): Observable<Array<Categorie>> {
    return this.http_client.get<Array<Categorie>>(this.url);
  }

  getCategorieByLibelle(libelle: string): Observable<Categorie> {
    return this.http_client.get<Categorie>(this.url + '/' + libelle);
  }

}
