import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gest-tareas',
  templateUrl: './gest-tareas.page.html',
  styleUrls: ['./gest-tareas.page.scss'],
})
export class GestTareasPage implements OnInit {
  private atras: Location;


  constructor(atras: Location) { this.atras = atras;}


  irAtras() {
    this.atras.back();
  }
  ngOnInit() {
  }

}
