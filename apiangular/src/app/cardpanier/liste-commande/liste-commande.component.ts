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

  ngOnInit(): void {
   
    this.prser.getCommandAll().subscribe(
      comand=>{
        this.CommandALL =comand
     
       console.log(this.CommandALL);
       
      // this.CommandALL.forEach((item: any)=>{
      //     this.idd= item.id
         
          
      //   });
        
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



}

