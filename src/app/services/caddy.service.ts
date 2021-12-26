import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Produit } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  private subject = new Subject<any>();
  tuple = {
    produit: null,
    qteOriginal: 0,
    isPush: true
  };
  constructor() { }

  ajouterAuPanier(produit: Produit, qteOriginal: number) {
    this.tuple['produit'] = produit;
    this.tuple['qteOriginal'] = qteOriginal;
    this.tuple['isPush'] = true;
    this.subject.next(this.tuple);
  }

  retirerDuPanier(produit: Produit, qteOriginal: number) {
    this.tuple['produit'] = produit;
    this.tuple['qteOriginal'] = qteOriginal;
    this.tuple['isPush'] = false;
    this.subject.next(this.tuple);
  }

  getPanier(): Observable<any> {
    return this.subject.asObservable();
  }
}
