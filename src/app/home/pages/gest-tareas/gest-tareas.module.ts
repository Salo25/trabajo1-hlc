import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestTareasPageRoutingModule } from './gest-tareas-routing.module';

import { GestTareasPage } from './gest-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestTareasPageRoutingModule
  ],
  declarations: [GestTareasPage]
})
export class GestTareasPageModule {}
