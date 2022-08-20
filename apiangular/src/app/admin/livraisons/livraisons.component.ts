import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/commande';
import { Livraison } from 'src/app/livraison';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  livraisons!:any;
  postId!: any;

  constructor(private prser: ProduitService,private route: ActivatedRoute,
    private http: HttpClient) { }
tabCL:any[]=[];
tabCLl:any[]=[];
  ngOnInit(): void {
    this.prser.getLivraisonAll().subscribe(
      livraison=>{
         
        // console.log(livraison);
        this.livraisons =livraison
        
        // livraison.forEach((element: any) => {
          
        //   this.tabCL.push(element.commandes);
        //     this.tabCL.forEach(ele => {
        //       ele.forEach((e:any) => {
        //         if(e.etat=="encours livraison"){

        //           this.tabCLl.push (this.livraisons)  
                    
        //         }
                
        //       });
              
        //     });
          
        //   //  this.tabCL.forEach(ele => {
        //   //   if(ele.etatLiv=="encours livraison")
        //   //   this.tabCLl.push(ele.livraison)
        //   //  });
            
        // });
        
      }
    )
  }


  // UpdateLivraison(id:number,faire:string){
  //   this.prser.UpdateLivraison(id,faire)
  // }

  
}
