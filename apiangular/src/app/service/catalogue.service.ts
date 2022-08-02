import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  
 // getProductObser(): Observable<any>{
  //  console.log(from(this.catalogues));
    
  //  return  from(this.catalogues);
//  }
 // getProductObser(){
    
 //   from(catalogues.menus);
//  }

private itemsSubject = new BehaviorSubject<any>([]);
  items$ = this.itemsSubject.asObservable();

getProduit(): Observable<Catalogue> {

  
  return this.http.get<Catalogue>(this.url);
}
menus!:any;
burgers!:any;
getOneById(){
  
  this.getProduit().subscribe(produit => {
    this.burgers=produit.burger.forEach(element => {
           return element
    });

    
  });
  
}
findMenu(id:number):Observable<Menu>{
  return this.http.get<Menu>("http://127.0.0.1:8000/api/menus/"+id);
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
