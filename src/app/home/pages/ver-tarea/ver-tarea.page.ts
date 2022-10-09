import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.page.html',
  styleUrls: ['./ver-tarea.page.scss'],
})
export class VerTareaPage implements OnInit {
  private atras: Location;


  constructor(atras: Location) { this.atras = atras;}


  irAtras() {
    this.atras.back();
  }
  ngOnInit() {
  }

}
