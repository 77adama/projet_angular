


import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-cardpanier',
  templateUrl: './cardpanier.component.html',
  styleUrls: ['./cardpanier.component.css']
})
export class CardpanierComponent implements OnInit {
// @ViewChildren('myitems') subTotalItems: QueryList<ElementRef>;
@ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef> | any;
@ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
  ElementRef
> | any;
currencyPipe: any;
  postId: any;
  constructor(private prser: ProduitService, private http: HttpClient,
    private catalogue: CatalogueService) { }
  items:any = [];
  qtyTotal= 0
  items$:any = this.prser.items$;
  quantity:number=0;
  som:number=this.getPrixtotal();
  command:boolean=true;
  aLivrer:boolean=true;
  zone:any;
  fritteTotal!:any;
 boissonTotal!:any;

//----- calculate total
get total() {
  return this.items$.reduce(
    (produit:any, x:any) => ({
      qtyTotal: 1,
      prix: produit.prix + x.qtyTotal * x.prix
    }),
    { qtyTotal: 1, prix: 0 }
  ).prix;
}

  changeSubtotal(item:any, index:any) {
    const qty = item.qtyTotal;
    const amt = item.prix;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.prser.saveCart();
  }

  //----- remove specific item
  

  //----- clear cart item
  clearCart(product: any) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.prser.clearCart(product);
    this.items = [...this.prser.getItems()];
  }

  //----- add item to cart
  addToCart(product: any) {
    if (!this.prser.itemInCart(product)) {
      product.qtyTotal = 1;
      this.prser.addToCart(product); //add items in cart
      
    }
  }

  getPrixtotal(){
    return this.prser.getPrixtotal();
  }


  ngOnInit(): void {

    this.catalogue.findBoisson().subscribe(
      boiso=>{
        this.boissonTotal = boiso
      }
    )
    this.catalogue.findFritte().subscribe(
      fritte=>{
        this.fritteTotal =fritte
      });
   /// this.som += this.prser.getPrixtotal();
  ///  console.log(this.som);
  
  this.getPrixtotal();
    
    this.quantity = 1

    this.prser.getZone().subscribe(
      zon=>{
        this.zone =zon
        
        
      });


  }
idd!:number;
  getObjetZone(z: any){
   
    this.idd =z.id;
    
    
  }



  removeFromCart(product: any) {
    this.prser.removeToCart(product);
    
   
  }

  addQt(){
    this.quantity++
   
    
  }

mmm(t:any){
this.quantity = +t.value;

}

  supQt(){
    if (this.quantity>1) {
      this.quantity++
    }
  }
 
getPanier(){
  return this.prser.getPanier();
}

tabStru:any[]=[];
structureCommand(){
  
  this.prser.getPanier().forEach(element=>{
    
    
    this.tabStru.push({
      // "quantite": element.quantity,
      // "produits": "/api/produits/"+element.id
      "quantite": element.quantity,
      "prix": 43000,
      "produit": [
        "/api/produits/"+element.id
      ]
      
    })
    
    
  })
  
  
  return this.tabStru;
}

sendCommande(){
 
  
  this.http.post<any>('http://localhost:8000/api/commandes', 
  {
    
    "produits":this.structureCommand(),
    "client": "/api/clients/4",
   "timeAt": "2022-08-08T16:30:37.234Z",
    "etat": "en cours"
  }
  ).subscribe(data => {
    
    this.postId = data.id;
  })
  
      
       this.postId;
  }

  test(){
    this.command = false;
  }
  
  aLivrerr(){
    this.aLivrer = false;
  }
  
  // "isEtat": true,
  // "produits": [
  //   {
  //     "quantite": 0,
  //     "produits": [
  //       "string"
  //     ]
  //   }
  // ],
  // "client": "string"

  sendCommandeZone(){
    this.http.post<any>('http://localhost:8000/api/commandes', 
    {
      
      "produits":this.tabStru,
      "client": "/api/clients/4",
      "zones": [
        "/api/zones/"+this.idd
      ]
    }
    ).subscribe(data => {
      
      this.postId = data.id;
    })
    
        
         this.postId;
    }
}
