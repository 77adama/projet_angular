import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/commande';
import { Livraison } from 'src/app/livraison';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-detai-livraisons',
  templateUrl: './detai-livraisons.component.html',
  styleUrls: ['./detai-livraisons.component.css']
})
export class DetaiLivraisonsComponent implements OnInit {
  livraisonOne!:any;
  postId!: any;
  etatComd!:any;
  constructor(private prser: ProduitService,private route: ActivatedRoute,
    private http: HttpClient) { }
    tabCL:any;
  ngOnInit(): void {
    let idLivraison = +this.route.snapshot.params['id'];
 

  this.prser.getLivraisonOne(idLivraison).subscribe(
      
    l => {
      // this.etatComd=Livraison.commandes
      
      // Livraison.forEach((element: any) => {
      //   this.tabCL.push(element.commandes);
      //   console.log(this.tabCL);
        
      // });
     
      
      
      this.livraisonOne= l
      
    }
  )}

  sendpayerLivPut(id:number,etat:string){
    this.http.put<any>('http://localhost:8000/api/commandes'+'/'+id,{etat: etat}).subscribe();
    //  location.reload();
  }

  sendanulerLivPut(id:number,etat:string){
    this.http.put<any>('http://localhost:8000/api/commandes'+'/'+id,{etat: etat}).subscribe();
    //  location.reload();
  }

  
  // sendpayerLivPutt(id:number,body:string){

  //   this.http.put<any>('http://localhost:8000/api/commandes/'+id+, 
  //   {
      

      
  //         etat: "payer"
       

  //     // "etat": "payer",
      
  //   }
  //   ).subscribe(data => {
     
         
  //     this.postId = data.id;
  //   })
    
        
  //        this.postId;
        
         
  //   }
  
    annulerr(comm:Commande){
    comm.etat="annuler"
      // comm.commandes.etat="payer" 
    }
    payerr(comm:Commande){
      comm.etat="payer"
        // comm.commandes.etat="payer" 
      }
}
