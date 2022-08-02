import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Burger } from 'src/app/burger';
import { Catalogue } from 'src/app/catalogue';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() catalogues!:any;
  isShown:boolean = false;
  show:number=-1;
  produits!:any;
  menus!:any;
  burgers!:any;
            
  constructor(private catalogueService: CatalogueService,private route: ActivatedRoute,private prser: ProduitService) {  }
 
  items$ = this.prser.items$;

  ngOnInit(): void {
   
  }

  addToCart(product: any) {
    this.prser.addToCart(product);
  
   
  }

  removeFromCart(product: any) {
    this.prser.removeToCart(product);
    
  }

  toggle(index:number) {
    if (this.menus == index) {
      this.menus = -1;
    }else{
      this.burgers = index;
    }
  
  }
}
