import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from './service/catalogue.service';
import { ProduitService } from './service/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiangular';

  constructor(private menu: CatalogueService,private route: ActivatedRoute,private prser: ProduitService ) { }

  items$ = this.prser.items$;
}
