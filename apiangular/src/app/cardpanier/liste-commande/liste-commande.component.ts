import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/commande';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css'],
  providers: [DatePipe]
})
export class ListeCommandeComponent implements OnInit {
  CommandALL!:any;
  etatA!:any;
  postId!: any;
  encours!:string
  comd!:any;
  idd!:any;
  searchText!:string;
  constructor(private prser: ProduitService,private http: HttpClient) { }

  tabC:any[]=[]
  ngOnInit(): void {
   
    this.prser.getCommandAll().subscribe(
      comands=>{
        
        comands.forEach((command: any) => {
          if(command.etat=="en cours"){
                   this.tabC.push(command);
                }
        });
     
        // console.log(this.tabC);
       
      // this.CommandALL.forEach((item: any)=>{
      //     this.idd= item.id
         
          
      //   });
      // this.prser.getLivreur().subscribe(
      //   livreurs=>{
      //    livreurs.forEach((livreur: any) => {
      //     if(livreur.etatLiv=="disponible"){
      //       this.tabL.push(livreur);
      //     }
              
      //    });
            
      //   })
      //   this.menus.menuBoissons.forEach((item: any) =>{
      //     this.qntboisson = item.quantite;
      //     this.nomboisson = item.boisson.nom;
      //     this.id=item.boisson.id
      //  })
        
      });
  }



sendCommandePut(comm:Commande){

  this.http.put<any>('http://localhost:8000/api/commandes/'+comm.id, 
  {
    
    "etat": "annuler",
    
  }
  ).subscribe(data => {
   
       
    this.postId = data.id;
  })
  
      
       this.postId;
      
       
  }

  annulerr(comm:Commande){
    comm.etat="annuler" 
  }
//  ///////////////////////////////       /////////////////////////

// changeEtatCmd(id:number,faire:string){
//   if(faire=="annuler"){
//     this.http.put<any>('http://localhost:8000/api/commandes'+'/'+id,{etat: "annuler"})
//     .subscribe()
    
        
         
//   }
// }

updateCommand(id:number,faire:string){
  this.prser.UpdateCommand(id,faire)
}

}

