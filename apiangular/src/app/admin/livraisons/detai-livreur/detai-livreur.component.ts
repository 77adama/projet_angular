import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-detai-livreur',
  templateUrl: './detai-livreur.component.html',
  styleUrls: ['./detai-livreur.component.css']
})
export class DetaiLivreurComponent implements OnInit {
  LivreurOne!:any;

  constructor(private prser: ProduitService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idLivreur = +this.route.snapshot.params['id'];
 

  this.prser.findOneLivreur(idLivreur).subscribe(
      
    Livreur => { 
      
      this.LivreurOne=Livreur;
    
    
    
    
     
      // this.idd=zonn.id;
     
      
  //   //  this.menus.menuBoissons.forEach((item: any) =>{
  //   //     this.qntboisson = item.quantite;
  //   //     this.nomboisson = item.boisson.nom;
  //   //     this.id=item.boisson.id
     })
  }

}
