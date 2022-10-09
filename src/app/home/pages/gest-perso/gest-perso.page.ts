import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gest-perso',
  templateUrl: './gest-perso.page.html',
  styleUrls: ['./gest-perso.page.scss'],
})
export class GestPersoPage implements OnInit {
  private atras: Location;


  constructor(atras: Location) { this.atras = atras;}


  irAtras() {
    this.atras.back();
  }
  ngOnInit() {
  }

}
