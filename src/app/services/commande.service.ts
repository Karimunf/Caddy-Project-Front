import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../models/Commande';
import {CommandeClientDTO} from '../dtos/CommandeClientDTO';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url:string="http://localhost:8080/commandes"
  
  constructor(private http_client:HttpClient) { }

  ajouterCommande(commandeClientDTO:CommandeClientDTO):Observable<Commande>{
    return this.http_client.post<Commande>(this.url,commandeClientDTO);
  }

  listCommandeParClient(clientCode:string):Observable<Array<Commande>>{
    return this.http_client.get<Array<Commande>>(this.url+'/'+clientCode);
  }
}
