import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CardComponent } from './catalogue/card/card.component';
import { CatBurgerComponent } from './catalogue/cat-burger/cat-burger.component';
import { MenuComponent } from './catalogue/menu/menu.component';
import { DetailComponent } from './catalogue/detail/detail.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { PanierComponent } from './catalogue/panier/panier.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardpanierComponent } from './cardpanier/cardpanier.component';
import { FritteComponent } from './catalogue/detail/fritte/fritte.component';
import { BoissonComponent } from './catalogue/detail/boisson/boisson.component';
import { TailleComponent } from './catalogue/detail/taille/taille.component';
import { ComandClientComponent } from './cardpanier/comand-client/comand-client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeCommandeComponent } from './cardpanier/liste-commande/liste-commande.component';
import { DetailCommandeComponent } from './cardpanier/detail-commande/detail-commande.component';
import { ModalComponent } from './cardpanier/modal/modal.component';
import { ComplementComponent } from './catalogue/panier/complement/complement.component';

const routes : Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'detailComd/:id', component: DetailCommandeComponent },
  { path: 'panier', component: CardpanierComponent },
  { path: 'comand-client', component: ComandClientComponent },
  { path: '', component: CatalogueComponent},
  { path: 'burger', component: CatBurgerComponent },
  { path: 'liste-commande', component: ListeCommandeComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogueComponent,
    CardComponent,
    CatBurgerComponent,
    MenuComponent,
    DetailComponent,
    PanierComponent,
    CardpanierComponent,
    FritteComponent,
    BoissonComponent,
    TailleComponent,
    ComandClientComponent,
    ListeCommandeComponent,
    DetailCommandeComponent,
    ModalComponent,
    ComplementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [ CurrencyPipe],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
