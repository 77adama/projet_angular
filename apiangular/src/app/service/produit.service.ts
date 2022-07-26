import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Catalogue } from '../catalogue';
import { Client } from '../Client';
import { Commande } from '../commande';
import { Livraison } from '../livraison';

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
  
  getQuantity(quantity:number) {

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
//////////////////////////////commande////////////////////////////////////////////////////////////////////
tabPanier:any[]=[];
getPanier(){
  this.items$.subscribe(data=>{
    console.log(data);
    
   this.tabPanier=data;
   
    
  }
  )
  return  this.tabPanier
}
 

//////////////////////////////les zones////////////////////////////////////////////////////////////////////

urlZone="http://localhost:8000/api/zones"

getZone(): Observable<any> {

  
  return this.http.get<any>(this.urlZone);
}
findOneZone(id:number):Observable<any>{
  return this.http.get<any>("http://localhost:8000/api/zones/"+id);
}

getLivreur():Observable<any> {
  return this.http.get<any>("http://localhost:8000/api/livreurs");
}

getClient(): Observable<any> {
 
  
  return this.http.get<any>(this.urlZone);
}



//////////////////////////////lister les commandes clients////////////////////////////////////////////////////////////////////

urlCommandClie="http://localhost:8000/api/clients/4"
getCommandClient(): Observable<Client> {
 
  return this.http.get<Client>(this.urlCommandClie);
}


urlListeComman="http://localhost:8000/api/commandes"
getCommandAll(): Observable<any> {
 
  return this.http.get<any>(this.urlListeComman);
}
//  //////////////////////////////
UpdateCommand(id:number,etat:string){
  this.http.put<any>('http://localhost:8000/api/commandes'+'/'+id,{etat: etat}).subscribe();
  location.reload();
}
UpdateLivraison(id:number,etat:string){
  this.http.put<any>('http://localhost:8000/api/livraisons'+'/'+id,{etat: etat}).subscribe();
  // location.reload();
}
//  This fileReplacements is used to replaced by the
tabComd:any[]=[]
 ajoutComd(id:number){
this.tabComd.push(id)
 }
retirComd(id:number){
  this.tabComd.splice(this.tabComd.indexOf(id), 1)
 }


 removComd(id:number){

 }

//  /////////////////////////////////////liste livraison///////////////////////////////////////////

urlListeLivraison="http://localhost:8000/api/livraisons"
getLivraisonAll(): Observable<any> {
 
  return this.http.get<Livraison>(this.urlListeLivraison);
}
getLivraisonOne(id:number): Observable<any> {
 
  return this.http.get<any>("http://localhost:8000/api/livraisons/"+id);
}

findOneLivreur(id:number):Observable<any>{
  return this.http.get<any>("http://localhost:8000/api/livreurs/"+id);
}

findLivreurAll():Observable<any>{
  return this.http.get<any>("http://localhost:8000/api/livreurs");
}
}
