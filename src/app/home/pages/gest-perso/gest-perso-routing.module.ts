import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestPersoPage } from './gest-perso.page';

const routes: Routes = [
  {
    path: '',
    component: GestPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestPersoPageRoutingModule {}
