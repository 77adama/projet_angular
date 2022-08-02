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

const routes : Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'panier', component: CardpanierComponent },
  { path: '', component: CatalogueComponent},
  { path: 'burger', component: CatBurgerComponent },
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
    TailleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule
    
  ],
  providers: [ CurrencyPipe],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
