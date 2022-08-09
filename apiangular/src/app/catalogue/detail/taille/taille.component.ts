import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-taille',
  templateUrl: './taille.component.html',
  styleUrls: ['./taille.component.css']
})
export class TailleComponent implements OnInit {
  @Input() taillee!:any;
  boisson!:any;
  menus!:any;
 burgers!:any;
 tailles!:any;

  constructor(private catalogue: CatalogueService,private route: ActivatedRoute) { }
  quantity:number=0;
  Qte:any=0;
  Qtee:any=0;

  ngOnInit(): void {
    this.quantity=0;
    this. getQuantBoi(this.Qte);
    this.Qte=0;
    this.Qtee=0;
   this. tab=[];
    // this.burger = this.catalogue.getOneBy(1)
  const idBurger = +this.route.snapshot.params['id'];
  
     

        this.catalogue.findMenu(idBurger).subscribe(
          produits => {
                  
                    
            this.menus = produits
            console.log(this.menus);
            
            
            
          })
  //  this.catalogue.findMenu(idBurger).subscribe(
      
   //   produits => { findFritte
    //        console.log();
            
    //    this.menus=produits.id;
     //   this.burgers=produits.burger;
          
    //  });
                     
  }

  mmm(t:any){
    this.quantity = +t.value
  }
  value:any;
tab:number[]=[];
  addQte(){
      this.Qte++
   
    
   console.log(this.Qte);
   
      
  }
  removeQte(){
   
      this.Qte--

    
    console.log(this.Qte);
    
  }

  ajout(){
    this.tab.push(this.Qte) 
    console.log(this.tab);
    
  }

  getQuantBoi(element:number){
    return this.catalogue.getQuantBoi(element)
    console.log();
    
    
  }
}
