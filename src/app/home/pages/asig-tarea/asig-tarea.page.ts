//import { LocationChangeListener, LocationStrategy } from '@angular/common';
//import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asig-tarea',
  templateUrl: './asig-tarea.page.html',
  styleUrls: ['./asig-tarea.page.scss'],
})
export class AsigTareaPage implements OnInit /*LocationStrategy*/ {
  private atras: Location;


  constructor(atras: Location) { this.atras = atras;}


  irAtras() {
    this.atras.back();
  }

  ngOnInit() {
  }

}
