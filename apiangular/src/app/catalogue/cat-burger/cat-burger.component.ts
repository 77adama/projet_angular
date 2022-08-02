import { Component, OnInit } from '@angular/core';
import { Burger } from 'src/app/burger';
import { CatalogueService } from 'src/app/service/catalogue.service';

import {
  
  ElementRef,
  
  QueryList,
  VERSION,
  ViewChildren
} from "@angular/core";
import { CurrencyPipe } from "@angular/common";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { PanierService } from 'src/app/service/panier.service';
@Component({
  selector: 'app-cat-burger',
  templateUrl: './cat-burger.component.html',
  styleUrls: ['./cat-burger.component.css']
})


export class CatBurgerComponent implements OnInit {
  // @ViewChildren('myitems') subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap")
  subTotalItems!: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing")
  subTotalItems_existing!: QueryList<
    ElementRef
  >;
burger: Burger[]=[];
isShown:boolean = false;
show:number=-1;
  constructor( public cartService: PanierService,
    private currencyPipe: CurrencyPipe ) { }


  
  items:any = [];
  sampleSuggestionsArray = [
    {
      id: "1",
      menuName: "Item 1",
      variationCost: "20.50",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    },
    {
      id: "2",
      menuName: "Item 2",
      variationCost: "10",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    },
    {
      id: "3",
      menuName: "Item 3",
      variationCost: "5.50",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    }
  ];

  //----- calculate total
  get total() {
    return this.items.reduce(
      (sum:any, x:any) => ({
        qtyTotal: 1,
        variationCost: sum.variationCost + x.qtyTotal * x.variationCost
      }),
      { qtyTotal: 1, variationCost: 0 }
    ).variationCost;
  }

  changeSubtotal(item:any, index:any) {
    const qty = item.qtyTotal;
    const amt = item.variationCost;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  //----- remove specific item
  removeFromCart(item:any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items:any) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  //----- add item to cart
  addToCart(item:any) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }


  ngOnInit(): void {
   // this.burger =this.catBurger.getBurger();  
  }
 
  toggle(index:number) {
    if (this.show == index) {
      this.show = -1;
    }else{
      this.show = index;
    }
  
  }

}
