import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'gest-perso',
    loadChildren: () => import('./gest-perso/gest-perso.module').then( m => m.GestPersoPageModule)
  },
  {
    path: 'gest-tareas',
    loadChildren: () => import('./gest-tareas/gest-tareas.module').then( m => m.GestTareasPageModule)
  },
  {
    path: 'asig-tarea',
    loadChildren: () => import('./asig-tarea/asig-tarea.module').then( m => m.AsigTareaPageModule)
  },
  {
    path: 'ver-tarea',
    loadChildren: () => import('./ver-tarea/ver-tarea.module').then( m => m.VerTareaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
