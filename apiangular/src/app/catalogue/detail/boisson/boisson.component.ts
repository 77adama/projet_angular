import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/menu';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {
  @Input() boissonn!:any;
  boisson!:any;
  menus!:Menu;
 tailles!:any;
  Qte=0;
  ajout:boolean=true;

  constructor(private catalogue: CatalogueService,private route: ActivatedRoute,private prser: ProduitService) { }
  quantity:number=0;
  qntboisson!: number;
  nomboisson!: string;

  items$ = this.prser.items$;
  addToCart(product: any) {
    this.prser.addToCart(product);
  
   
  }

  removeFromCart(product: any) {
    this.prser.removeToCart(product);
    
  }


  ngOnInit(): void {
    this.Qte=0;
    this.quantity=1;
    this.qntboisson=0;
    // this.burger = this.catalogue.getOneBy(1)
  const idBurger = +this.route.snapshot.params['id'];
  
      this.catalogue.findBoisson().subscribe(
        boisson=>{
          this.boisson =boisson;
          
        });
    this.catalogue.findMenu(idBurger).subscribe(
      
      produits => { 
        
        this.menus=produits;
       this.menus.menuBoissons.forEach((item: any) =>{
          this.qntboisson = item.quantite;
          this.nomboisson = item.boisson.nom;
       })
      
          
      });
      
                     
  }

  mmm(t:any){
    this.quantity = +t.value
  }

  compare(){
    if (this.Qte===this.qntboisson) {
      this.ajout=false;
      
    }else{
      this.ajout=true;
    }
  }
conditions(){
  this.Qte <=2
}
addQte(){
    this.Qte++
 
  
 console.log(this.Qte);
 
    
}
removeQte(){
 
    this.Qte--

  
  console.log(this.Qte);
  
}

}
