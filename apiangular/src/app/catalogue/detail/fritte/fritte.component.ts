import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-fritte',
  templateUrl: './fritte.component.html',
  styleUrls: ['./fritte.component.css']
})
export class FritteComponent implements OnInit {
  @Input() frittee!:any;
  fritte!:any;

  constructor(private catalogue: CatalogueService,private route: ActivatedRoute) { }
  quantity:number=0;

  ngOnInit(): void {
    this.quantity=1;
    // this.burger = this.catalogue.getOneBy(1)
  const idBurger = +this.route.snapshot.params['id'];
  
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
