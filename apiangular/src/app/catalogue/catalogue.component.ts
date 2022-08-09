import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../catalogue';
import { CatalogueService } from '../service/catalogue.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  catalogue:Catalogue[]=[]
  isDetail:number = -1;
 produits!:any;
 menus!:any;
 burgers!:any;
 searchText!:string;

  constructor(private catalogueServise: CatalogueService,private prser: ProduitService) { }

  items$:any = this.prser.items$;

  addToCart(product: any) {
    this.prser.addToCart(product-1);
    
  }

  removeFromCart(product: any) {
    this.prser.removeToCart(product);
    this.items$ = this.prser.addToCart(-1);
  }

  ngOnInit(): void {
    
    this.prser.getProduit().subscribe(
      produits => {
          
          
          
        this.menus=produits.menu;
        this.burgers=produits.burger;
         
         
     
        
      });

  }

}
