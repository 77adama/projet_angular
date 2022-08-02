import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Input() panier!:any;
  prixtotal:number=0;

  // @ViewChildren('myitems') subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef> | any;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
    ElementRef
  > | any;
  currencyPipe: any;

  constructor(private prser: ProduitService) { }
  tab : any = [];
  items:any = [];
  qtyTotal= 0
  items$:any = this.prser.items$;
  quantity:any;
  quantite:any;
  product:any;
  som:number=this.getPrixtotal();
  //----- calculate total
  
  
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
  getQuantity(product:any,quantity:any){
    return this.prser.getQuantity(product,quantity);
  }

  
 
  
  ngOnInit(): void {
    this.quantite=1;
    this.getPrixtotal();
    this.tab = this.prser.getQuant();
   
    
  }
  
  
  
  removeFromCart(product: any) {
    this.prser.removeToCart(product);
   
  }

  
  

  prixsT=0;
prixs=0;
mmm(t:any){
       this.quantite = +t.value;
}

getPrixtotal(){
  return this.prser.getPrixtotal();
}

priTotal(){
  let total = 0;
  this.prixs=this.items$.subscribe()
  
  
  
  
}
////////////////////////////////////////////////////


////////////////////////////////////////////////////





  getPriT(){
    let total = 0;
  
    
   this.items$.subscribe(
    (value: any) =>{ value.forEach((element:any) => {
      
      total+=element.prix
      
      
    });
    
  } );
    
    
    return total
  }

  
}
