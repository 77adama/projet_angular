import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable,map,take } from 'rxjs';
import { Boisson } from '../boisson';
import { Burger } from '../burger';
import { Catalogue } from '../catalogue';
import { Fritte } from '../fritte';
import { Menu } from '../menu';




@Injectable({
  providedIn: 'root'
})
export class CatalogueService {





url="http://localhost:8000/api/catalogues";

  constructor(private http: HttpClient) {
    let existingCartItems = JSON.parse(localStorage.getItem('products') || '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
   }

  getPrixtotalM(){
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

   saveEtat(){
    let TabSave:Array<any> = [];
    this.items$.subscribe(
      value=>{
        TabSave=value;
      }
    )
  }

  getQuantityM(quantity:number) {

    this.items$.pipe(
      take(1),
      map((menus) => {
       menus.forEach((element:any) => {
        element.quantity = +quantity;
       });
        localStorage.setItem('products', JSON.stringify(menus));
      }),
    ).subscribe();

  }

  getQuantBoi(quantity:number) {

    this.items$.pipe(
      take(1),
      map((menus) => {
       menus.forEach((element:any) => {
        element.quantity = +quantity;
       });
        localStorage.setItem('products', JSON.stringify(menus));
      }),
    ).subscribe();

  }

  

  getQte(quantity:number){
    this.items$.pipe(
      take(1),
      map((tailles) => {
        tailles.forEach((element:any) => {
        element.quantity = +quantity;
       });
        localStorage.setItem('products', JSON.stringify(tailles));
      }),
    ).subscribe();

    
  }
 // getProductObser(): Observable<any>{
  //  console.log(from(this.catalogues));
    
  //  return  from(this.catalogues);
//  }
 // getProductObser(){
    
 //   from(catalogues.menus);
//  }

private itemsSubject = new BehaviorSubject<any>([]);
  items$ = this.itemsSubject.asObservable();


menus!:any;
burgers!:any;
// http://localhost:8000/api/commandes/88  ////////////////////////////
findCommandeOne(id:number):Observable<any>{
  return this.http.get<any>("http://localhost:8000/api/commandes/"+id);
}


// //////////////////////////////////////////////////////////////////////////////
findMenu(id:number):Observable<Menu>{
  return this.http.get<Menu>("http://127.0.0.1:8000/api/menus/"+id);
}

findBurger(id:number):Observable<Burger>{
  return this.http.get<Burger>("http://127.0.0.1:8000/api/burgers/"+id);
}

findBoisson():Observable<Boisson>{
  http://localhost:8000/api/boissons
  return this.http.get<Boisson>("http://localhost:8000/api/boissons");
}
findFritte():Observable<Fritte>{
  http://localhost:8000/api/boissons
  return this.http.get<Fritte>("http://localhost:8000/api/fritte_portions");
}
}
