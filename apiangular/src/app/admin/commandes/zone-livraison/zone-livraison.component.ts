import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-zone-livraison',
  templateUrl: './zone-livraison.component.html',
  styleUrls: ['./zone-livraison.component.css']
})
export class ZoneLivraisonComponent implements OnInit {
  zon!:any;
  zoneOne!:any;
  CommandALL!:any;
  com2!:any;
  idd!:any;
  com!:any;
  livreur!:any;
  idLiv!:any;
  liv!:string;
  postId!:any;
  livrer:boolean=true;
  select:boolean=true;
  checbox:boolean=true;
  constructor(private prser: ProduitService,private route: ActivatedRoute,
    private http: HttpClient) { }

    tabL:any[]=[]
    tabLivrai:any[]=[]
  ngOnInit(): void {
   
    // this.prser.getZone().subscribe(
    //   z=>{
    //     this.zon = z;
       
        
       
    //   })
    // this.prser.getCommandAll().subscribe(
    //   comand=>{
    //      this.CommandALL = comand;
       
        
    //   });

    const idZone = +this.route.snapshot.params['id'];
 

  this.prser.findOneZone(idZone).subscribe(
      
    zonn => { 
      zonn.commandes.forEach((element: any) => {
        if(element.etat=="valider"){
          this.tabLivrai.push(element);
        }
        
        
      });
        
      
      
      
      this.zoneOne=zonn;
    
    
     
      this.idd=zonn.id;
     
      
  //   //  this.menus.menuBoissons.forEach((item: any) =>{
  //   //     this.qntboisson = item.quantite;
  //   //     this.nomboisson = item.boisson.nom;
  //   //     this.id=item.boisson.id
     })

     this.prser.getLivreur().subscribe(
        livreurs=>{
         livreurs.forEach((livreur: any) => {
          if(livreur.etatLiv=="disponible"){
            this.tabL.push(livreur);
          }
              
         });
            
        })
    
  }


  
  getObjetZone(zz: any){
   
    // this.idd =zz; 
  }

  
  
  public getObjetLivreur(event:any): void {  //event will give you full breif of action
    this.idLiv = event.target.value;
    
   
    
  }

  getObjetComd2(c: any){
    this.com2 = c
  }

  tab:any[]=[]
  getObjetComd(inp: any,cmd:any){
    if(inp.checked){
      this.prser.ajoutComd(cmd.id)

    }else{
    this.prser.retirComd(cmd.id)
    }
   this.prser.tabComd;
 
    
  }
  
  sendLivraison(){
 let tableau:string[]=[]
 this.prser.tabComd.forEach(id => {
  tableau.push("/api/commandes/"+id)
 });

  
    this.http.post<any>('http://localhost:8000/api/livraisons', 
    {
      "zone": "/api/zones/"+this.idd,
      "livreur": "/api/livreurs/"+this.idLiv,
      "commandes":tableau ,
      "etatLivraison": "en cours"
    }
    ).subscribe(data => {
      
      this.postId = data.id;
    })
    
        
         this.postId;
    }


    test(){
      this.livrer = false;
    }

    selectt(){
      this.select= false
    }
    checboxx(){
      this.checbox = false
    }
}
