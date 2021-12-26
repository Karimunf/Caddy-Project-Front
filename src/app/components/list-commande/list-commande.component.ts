import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/Commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  commandes: Array<Commande>;
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.listCommande();
  }

  listCommande() {
    let client = JSON.parse(sessionStorage.getItem('client'));
    this.commandeService.listCommandeParClient(client.code).subscribe(
      data => {
        this.commandes = data;
      }
    )
  }
}
