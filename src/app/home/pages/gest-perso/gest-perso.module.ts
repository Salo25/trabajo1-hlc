import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestPersoPageRoutingModule } from './gest-perso-routing.module';

import { GestPersoPage } from './gest-perso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestPersoPageRoutingModule
  ],
  declarations: [GestPersoPage]
})
export class GestPersoPageModule {}
