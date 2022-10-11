import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsigTareaPageRoutingModule } from './asig-tarea-routing.module';

import { AsigTareaPage } from './asig-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsigTareaPageRoutingModule
  ],
  declarations: [AsigTareaPage]
})
export class AsigTareaPageModule {}
