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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EtatLivreurComponent } from './commandes/zone-livraison/etat-livreur/etat-livreur.component';


@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
  
    DetailComponent,
    DetaiLivraisonsComponent,
    DetaiLivreurComponent,
    NewProduitsComponent,
    ZoneLivraisonComponent,
    EtatLivreurComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
