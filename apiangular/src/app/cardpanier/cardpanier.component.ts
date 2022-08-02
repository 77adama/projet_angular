


import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';

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
  constructor(private prser: ProduitService) { }
  items:any = [];
  qtyTotal= 0
  items$:any = this.prser.items$;
  quantity:number=0;
  som:number=this.getPrixtotal();

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
   /// this.som += this.prser.getPrixtotal();
  ///  console.log(this.som);
  
  this.getPrixtotal();
    
    this.quantity = 1
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
 

}
