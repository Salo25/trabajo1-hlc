import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestPersoPageRoutingModule } from './gest-perso-routing.module';

import { GestPersoPage } from './gest-perso.page';
import { PerosnaComponent } from './perosna/perosna.component';
import { PersonModalComponent } from './person-modal/person-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestPersoPageRoutingModule
  ],
  declarations: [GestPersoPage, PerosnaComponent, PersonModalComponent]
})
export class GestPersoPageModule {}
