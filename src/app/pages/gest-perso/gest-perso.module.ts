import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestPersoPageRoutingModule } from './gest-perso-routing.module';

import { GestPersoPage } from './gest-perso.page';
import { PerosnaComponent } from './perosna/perosna.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestPersoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GestPersoPage, PerosnaComponent]
})
export class GestPersoPageModule {}
