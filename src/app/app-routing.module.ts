import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AsigTareaPage } from './home/pages/asig-tarea/asig-tarea.page';
import { GestPersoPage } from './home/pages/gest-perso/gest-perso.page';
import { GestTareasPage } from './home/pages/gest-tareas/gest-tareas.page';
import { VerTareaPage } from './home/pages/ver-tarea/ver-tarea.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gestPerso', component: GestPersoPage
    //loadChildren: () => import('./pages/gest-perso/gest-perso.page').then( m => m.GestPersoPage)
  },
  {
    path: 'gestTareas',
    component: GestTareasPage
  },
  {
    path: 'asig-tarea',
    component: AsigTareaPage
  },
  {
    path: 'ver-tarea',
    component: VerTareaPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
