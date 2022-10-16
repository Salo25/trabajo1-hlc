import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestPersoPage } from './gest-perso.page';
import { GestPersoPageModule } from './gest-perso.module';

const routes: Routes = [
  {
    path: '',
    component: GestPersoPage
  },
  {
    path: 'person-modal',
    loadChildren: () => import('./person-modal/person-modal.component').then( m => m.PersonModalComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestPersoPageRoutingModule {}
