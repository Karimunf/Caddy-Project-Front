import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProduitComponent } from './components/produit/produit.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { ListCommandeComponent } from './components/list-commande/list-commande.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CaddyComponent } from './components/caddy/caddy.component';
import { CommandeComponent } from './components/commande/commande.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ListProduitComponent,
    ListCommandeComponent,
    CategorieComponent,
    CaddyComponent,
    CommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
