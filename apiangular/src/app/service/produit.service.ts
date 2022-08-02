import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Catalogue } from '../catalogue';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


url="http://localhost:8000/api/catalogues";
  somm: number=0;
  constructor(private http: HttpClient) { 
    let existingCartItems = JSON.parse(localStorage.getItem('products') || '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

 ////////////////////////////////////////////////////////// ////////////////////////

 items = [];
 totalAmount:any;
 tab : any = [];
 getItems() {
  return this.items;
  
  
} 

loadCart(): void {
  this.items = JSON.parse(localStorage.getItem('products') ?? '[]') ;
}

saveCart(): void {
  localStorage.setItem('products', JSON.stringify(this.items)); 
}

clearCart(items: Catalogue) {
  this.items = [];

  localStorage.removeItem("products")
}

itemInCart(products:any): boolean {
  return this.items.findIndex(o => o === products.id) > -1;
  
  
}




  
//////////////////////////////////////////////////////////////////////////////////////////////////
  private itemsSubject = new BehaviorSubject<any>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        product.quantity=1
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  } 
  
  getQuantity(product: any,quantity:number) {

    this.items$.pipe(
      take(1),
      map((products) => {
       products.forEach((element:any) => {
        element.quantity = +quantity;
       });
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();

  }
  getQuant()
  {
    this.tab = localStorage.getItem('products');
    return this.tab;
  }

  removeToCart(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
       
          products.splice(products.indexOf(product), 1);
        
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
    
    
  }

  

  

  getProduit(): Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url);
  }

  saveEtat(){
    let TabSave:Array<any> = [];
    this.items$.subscribe(
      value=>{
        TabSave=value;
      }
    )
  }

 getPrixtotal(){
   let total = 0;
   this.items$.subscribe(
    (value: any) =>{ value.forEach((element:any) => {
      
      total+=element.prix*element.quantity;
      
      
      
      
   });
    localStorage.setItem('products', JSON.stringify(value));
  } );
    
    this.saveEtat();
    return total
  }

  ///
 /// mmm(t:any){
  ///  this.prixs= this.items$.subscribe(
  ///    (value:any)=>value.forEach((element:any) => {
      //  console.log(element.prix);
        
   ///   })
  ///  ) 
    
  ///  this.quantity = +t.value;
    //console.log(this.prixtotal);
  ///  this.prixsT=this.prixs*this.quantity
    
  
  
///  }
//////////////////////////////////////////////////////////////////////////////////////////////////


 

    
}
