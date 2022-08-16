import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/commande';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
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
    //  //////////////////////////////////////////////////////////////////////////////////
    valideCommandePut(comm:Commande){

      this.http.put<any>('http://localhost:8000/api/commandes/'+comm.id, 
      {
        
        "etat": "valider",
        
      }
      ).subscribe(data => {
       
           
        this.postId = data.id;
      })
      
          
           this.postId;
          
           
      }
    
      valider(comm:Commande){
        comm.etat="valider" 
      }
}
