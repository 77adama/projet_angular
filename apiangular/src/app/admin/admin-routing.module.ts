import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { DetailComponent } from './commandes/detail/detail.component';
import { ZoneLivraisonComponent } from './commandes/zone-livraison/zone-livraison.component';
import { DetaiLivraisonsComponent } from './livraisons/detai-livraisons/detai-livraisons.component';
import { DetaiLivreurComponent } from './livraisons/detai-livreur/detai-livreur.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { NewProduitsComponent } from './produits/new-produits/new-produits.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [ 
  { path: '', component: CommandesComponent},
  { path: 'commandes', component: CommandesComponent},
  { path: 'commandes/zone/:zone', component: ZoneLivraisonComponent},
  { path: 'commandes/:id', component: DetailComponent},
  { path: 'livraisons', component: LivraisonsComponent},
  { path: 'livraisons/:id', component: DetaiLivraisonsComponent},
  { path: 'livraisons/livreur/:id', component: DetaiLivreurComponent},
  { path: 'produits', component: ProduitsComponent},
  { path: 'produits/new', component: NewProduitsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
