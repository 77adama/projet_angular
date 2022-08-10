import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Client';
import { Commande } from 'src/app/commande';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-comand-client',
  templateUrl: './comand-client.component.html',
  styleUrls: ['./comand-client.component.css']
})
export class ComandClientComponent implements OnInit {
  CommandClient!:Client;
  CommandALL!:any;
  postId!: any;
  command!:any;
  constructor(private prser: ProduitService, private http: HttpClient) { }

  ngOnInit(): void {
    
    this.prser.getCommandClient().subscribe(
      comand=>{
        this.CommandClient =comand
   
       
        
        
        
      });

  }

  sendCommandePut(comm:Commande){
    this.http.put<any>('http://localhost:8000/api/commandes/'+comm.id, 
    {
      
      "etat": "annuller",
      
    }
    ).subscribe(data => {
      
      this.postId = data.id;
      
      
      // this.CommandALL=data.isEtat; 
    })
    
        
         this.postId;
         
         
    }
   
    
  
    annulerr(comm:Commande){
      comm.etat="annuler"
     
      
      
    }

}
