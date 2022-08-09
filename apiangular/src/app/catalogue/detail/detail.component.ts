import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Boisson } from 'src/app/boisson';
import { Burger } from 'src/app/burger';
import { Catalogue } from 'src/app/catalogue';
import { Fritte } from 'src/app/fritte';
import { Menu } from 'src/app/menu';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  burger!: Burger;
  boisson!:Boisson;
  menus!:any;
 tailles!:any;
  Qte=0;
  ajout:boolean=true;
 burgers!:any;
 fritte!:Fritte;
 fritteTotal!:any;
 boissonTotal!:any;
 quantity:any;
  tab:any[]=[];
 
  constructor(private catalogue: CatalogueService,private route: ActivatedRoute,
    private prser: ProduitService ) { }
    
  qntboisson!: number;
  nomboisson!: string;
  quantitee:number=0;
  id!:number;

  items$ = this.prser.items$;
  

  removeFromCart(product: any) {
    this.prser.removeToCart(product);
    
  }


  getPrixtotalM(){
    return this.catalogue.getPrixtotalM();
  }
  getQuantityM(quantity:any){
    return this.catalogue.getQuantityM(quantity);
  }

  addToCart(product: any) {
    this.prser.addToCart(product);
  
   
  }

  ngOnInit(): void {
    this.quantitee=1;
    this.getPrixtotalM();
   
   
    //////////////////////////////////////////////////////////////////// 
  const idBurger = +this.route.snapshot.params['id'];
 

  this.catalogue.findMenu(idBurger).subscribe(
      
    produits => { 
      
      this.menus=produits;
     this.menus.menuBoissons.forEach((item: any) =>{
        this.qntboisson = item.quantite;
        this.nomboisson = item.boisson.nom;
        this.id=item.boisson.id
     })
    
        
    });
      
      this.catalogue.findBoisson().subscribe(
        boiso=>{
          this.boissonTotal = boiso
        }
      )
      this.catalogue.findFritte().subscribe(
        fritte=>{
          this.fritteTotal =fritte
        });

        
 //  //  //  //  //  //  //  //  //  //  //  //  //  // 
 this.catalogue.findBurger(idBurger).subscribe(
  fritte=>{
    this.burgers =fritte
  });
  // // // // // // //  //  //  //  //  //  //  ////////

  //  this.catalogue.findMenu(idBurger).subscribe(
      
   //   produits => { findFritte
    //        console.log();
            
    //    this.menus=produits.id;
     //   this.burgers=produits.burger;
          
    //  });

    // this.menu.findFritte().subscribe(
    //   fritte=>{
    //     this.fritte =fritte
    //   });
                     
  }


  mmm(t:any){
    this.quantitee = +t.value
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

valuInput(){
 //  tabInput:[]
 //const inputs = document.querySelectorAll("input");
 //inputs.forEach(element => {
  
 //});;
}

}
