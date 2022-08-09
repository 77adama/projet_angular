import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/commande';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  commande!:any;

  constructor(private catalogue: CatalogueService,private route: ActivatedRoute,
    private prser: ProduitService) { }

  ngOnInit(): void {
    const idBurger = +this.route.snapshot.params['id'];
    this.catalogue.findCommandeOne(idBurger).subscribe(
      
      produits => { 
        
        this.commande=produits;
     
       
      
          
      });
  }

}



 

  // this.catalogue.findMenu(idBurger).subscribe(
      
  //   produits => { 
      
  //     this.menus=produits;
  //    this.menus.menuBoissons.forEach((item: any) =>{
  //       this.qntboisson = item.quantite;
  //       this.nomboisson = item.boisson.nom;
  //       this.id=item.boisson.id
  //    })
    
        
  //   });