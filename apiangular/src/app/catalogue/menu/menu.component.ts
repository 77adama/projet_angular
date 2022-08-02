import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/menu';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() catalogues!:any;
  isShown:boolean = false;
  show:number=-1;
  produits!:any;
  menus!:any;
  burgers!:any;
  // isDetail: boolean = false;
  isDetail:number = -1;
  catMenu: Menu[]=[]
  constructor(private menu: CatalogueService,private route: ActivatedRoute,private prser: ProduitService ) { }

  items$ = this.prser.items$;
  ngOnInit(): void {
    
  }
  addToCart(product: any) {
    this.prser.addToCart(product);
  
   
  }

  removeFromCart(product: any) {
    this.prser.removeToCart(product);
    
  }


  // toglleDetails(index:number){
    // if (this.isDetail ==index) {
    //   this.isDetail = -1;
   //  } else {
   //    this.isDetail = index;
   //  }
 //  }
  //toglleDetails(index: number){
    //  this.isDetail = !this.isDetail;
    // }

}
