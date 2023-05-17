import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const routes: Routes = [
  {path: "paginas/listar", component: ListarComponent },
  {path: "paginas/crear", component: CrearComponent },
  {path: "paginas/acerca", component: AcercaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
