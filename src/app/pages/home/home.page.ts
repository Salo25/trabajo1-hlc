import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { GestPersoPage } from './pages/gest-perso/gest-perso.page';
// import { GestTareasPage } from './pages/gest-tareas/gest-tareas.page';
// import { AsigTareaPage } from './pages/asig-tarea/asig-tarea.page';
// import { VerTareaPage } from './pages/ver-tarea/ver-tarea.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // gestPers = GestPersoPage;
  // tareas = GestTareasPage;
  // asigTare = AsigTareaPage;
  // verTare = VerTareaPage;
  private pagina: string;

  constructor(private router: Router) {}

  navigate(_pagina: string){
    this.seleccionarPagina(_pagina);
    this.router.navigate([this.pagina]);
  }
  private seleccionarPagina(_pagina: string) {
    this.pagina = '/' + _pagina;
    //return this.pagina/*['/gest-perso']*/;
    //return GestPersoPage;
  }
}
