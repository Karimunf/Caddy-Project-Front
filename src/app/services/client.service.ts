import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url:string="http://localhost:8080/clients";
  constructor(private http_client:HttpClient) { }

  loadClient(email:string):Observable<Client>{
    return this.http_client.get<Client>(this.url+'/'+email);
  }
}
