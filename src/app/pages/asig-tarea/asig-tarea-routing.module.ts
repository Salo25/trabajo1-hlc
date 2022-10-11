import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsigTareaPage } from './asig-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: AsigTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsigTareaPageRoutingModule {}
