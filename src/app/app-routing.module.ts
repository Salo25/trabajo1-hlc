import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AsigTareaPage } from './home/pages/asig-tarea/asig-tarea.page';
// import { GestPersoPage } from './home/pages/gest-perso/gest-perso.page';
// import { GestTareasPage } from './home/pages/gest-tareas/gest-tareas.page';
// import { VerTareaPage } from './home/pages/ver-tarea/ver-tarea.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gestPerso', //component: GestPersoPage
    loadChildren: () => import('./pages/gest-perso/gest-perso.module').then( m => m.GestPersoPageModule )
  },
  {
    path: 'gestTareas',
    //component: GestTareasPage
    loadChildren: () => import('./pages/gest-tareas/gest-tareas.module').then( m => m.GestTareasPageModule )
  },
  {
    path: 'asig-tarea',
    //component: AsigTareaPage
    loadChildren: () => import('./pages/asig-tarea/asig-tarea.module').then( m => m.AsigTareaPageModule )
  },
  {
    path: 'ver-tarea',
    //component: VerTareaPage
    loadChildren: () => import('./pages/ver-tarea/ver-tarea.module').then( m => m.VerTareaPageModule )
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
