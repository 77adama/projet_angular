import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Burger } from 'src/app/burger';
import { Catalogue } from 'src/app/catalogue';
import { Menu } from 'src/app/menu';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  burger!: Burger;
  menus!:Menu;
 burgers!:any;
 boisson!:any;
 fritte!:any;
 
  constructor(private catalogue: CatalogueService,private route: ActivatedRoute) { }
  quantity:number=0;
  ngOnInit(): void {
    this.quantity=1;
    // this.burger = this.catalogue.getOneBy(1)
  const idBurger = +this.route.snapshot.params['id'];
  this.catalogue.findMenu(idBurger).subscribe(
      produits => {
              
                
        this.menus = produits
        console.log(this.menus);
        
        
      })
      this.catalogue.findBoisson().subscribe(
        boiso=>{
          this.boisson = boiso
        }
      )
      this.catalogue.findFritte().subscribe(
        fritte=>{
          this.fritte =fritte
        });
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
}
