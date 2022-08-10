import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {
  fritteTotal!:any;
  boissonTotal!:any;

  constructor(private prser: ProduitService, private http: HttpClient,
    private catalogue: CatalogueService) { }

  ngOnInit(): void {
    this.catalogue.findBoisson().subscribe(
      boiso=>{
        this.boissonTotal = boiso
      }
    )
    this.catalogue.findFritte().subscribe(
      fritte=>{
        this.fritteTotal =fritte
      });
  }

}
