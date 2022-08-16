import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  livraisons!:any;

  constructor(private prser: ProduitService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prser.getLivraisonAll().subscribe(
      livraison=>{
        this.livraisons =livraison
        
        
      }
    )
  }

}
