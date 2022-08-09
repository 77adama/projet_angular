import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks: any[]=[];

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.navLinks = [
      {
        label: 'Gerer les Commandes',
        link: '/comand-client',
        // index: 0,
      }, {
        label: 'Produits',
        //link: '',
       // index: 1
      }, {
        label: 'Contacts',
       // link: '',
      //  index: 2
      }, {
        label: 'mes commades',
      //  link: '',
       // index: 3
      }, {
        label: 'Frais de livraison',
       // link: '',
       // index: 3
      }
    ];

  }

}
