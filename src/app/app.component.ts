import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from './models/Categorie';
import { Client } from './models/Client';
import { CategorieService } from './services/categorie.service';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Array<Categorie>;
  client:Client=new Client();
  constructor(private categorieService: CategorieService,
    private clientService:ClientService, private router: Router) { }

  ngOnInit(): void {
    this.loadClient();
  }

  getAllCategories() {
    this.categorieService.getAllCategories()
      .subscribe(data => {
        this.categories = data;
      })
  }

  loadClient(){
    this.clientService.loadClient('karimfarhouti@gmail.com').subscribe(
      data=>{
        this.client=data;
        sessionStorage.setItem('client',JSON.stringify(this.client));
      }
    )
    this.getAllCategories();
  }
}
