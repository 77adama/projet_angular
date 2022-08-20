import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livreur } from 'src/app/livreur';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-detai-livreur',
  templateUrl: './detai-livreur.component.html',
  styleUrls: ['./detai-livreur.component.css']
})
export class DetaiLivreurComponent implements OnInit {
  LivreurOne!:any;
  livres!:any;
  postId!: any;

  constructor(private prser: ProduitService,private route: ActivatedRoute,
    private http: HttpClient) { }

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
     this.prser.findLivreurAll().subscribe(
          livreurs=>{
            this.livres =livreurs;
          }
     )
     
  }


  ocuuperLivreurPut(id:number,etat:string){
    this.http.put<any>('http://localhost:8000/api/livreurs'+'/'+id,{etat: etat}).subscribe();
     location.reload();
  }

  dispoLivPut(comm:Livreur){

    this.http.put<any>('http://localhost:8000/api/commandes/'+comm.id, 
    {
      
      "etat": "disponible",
      
    }
    ).subscribe(data => {
     
         
      this.postId = data.id;
    })
    
        
         this.postId;
        
         
    }
  
    dispon(comm:Livreur){
      comm.etatLiv="disponible" 
    }

    occuperLivPut(comm:Livreur){

      this.http.put<any>('http://localhost:8000/api/commandes/'+comm.id, 
      {
        
        "etat": "occupé",
        
      }
      ).subscribe(data => {
       
           
        this.postId = data.id;
      })
      
          
           this.postId;
          
           
      }
    
      occup(comm:Livreur){
        comm.etatLiv="occupé" 
      }
}
