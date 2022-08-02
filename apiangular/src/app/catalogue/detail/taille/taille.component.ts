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

  constructor(private catalogue: CatalogueService,private route: ActivatedRoute) { }
  quantity:number=0;

  ngOnInit(): void {
    this.quantity=1;
    // this.burger = this.catalogue.getOneBy(1)
  const idBurger = +this.route.snapshot.params['id'];
  
      this.catalogue.findBoisson().subscribe(
        boisson=>{
          this.boisson =boisson;
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
