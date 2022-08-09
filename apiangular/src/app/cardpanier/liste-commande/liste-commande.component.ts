import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/commande';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
  CommandALL!:any;
  etatA!:any;
  postId!: any;
  encours!:string
  comd!:any;
  constructor(private prser: ProduitService,private http: HttpClient) { }

  ngOnInit(): void {
   
    this.prser.getCommandAll().subscribe(
      comand=>{
        this.CommandALL =comand
       console.log();
       
      this.CommandALL.forEach((item: any)=>{
          this.etatA= item.etat
         
          
        });
        
      //   this.menus.menuBoissons.forEach((item: any) =>{
      //     this.qntboisson = item.quantite;
      //     this.nomboisson = item.boisson.nom;
      //     this.id=item.boisson.id
      //  })
        
      });
  }



sendCommandePut(id:number){
  this.http.put<any>('http://localhost:8000/api/commandes/'+id, 
  {
    
    "etat": "annuller",
    
  }
  ).subscribe(data => {
    this.CommandALL =data
       
      this.CommandALL.forEach((item: any)=>{
          this.etatA= item.etat
        
         
          
        });
    
    this.postId = data.id;
  })
  
      
       this.postId;
      
       
  }

  annulerr(){
    this.etatA="annuler"
   
    
    
  }
}

