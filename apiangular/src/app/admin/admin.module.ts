import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { DetailComponent } from './commandes/detail/detail.component';
import { DetaiLivraisonsComponent } from './livraisons/detai-livraisons/detai-livraisons.component';
import { DetaiLivreurComponent } from './livraisons/detai-livreur/detai-livreur.component';
import { NewProduitsComponent } from './produits/new-produits/new-produits.component';
import { ZoneLivraisonComponent } from './commandes/zone-livraison/zone-livraison.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
  
    DetailComponent,
    DetaiLivraisonsComponent,
    DetaiLivreurComponent,
    NewProduitsComponent,
    ZoneLivraisonComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
