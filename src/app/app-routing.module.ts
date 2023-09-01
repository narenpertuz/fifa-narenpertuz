import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioModificacionComponent } from './formulario-modificacion/formulario-modificacion.component';
import { FormularioEliminacionComponent } from './formulario-eliminacion/formulario-eliminacion.component';
import { FormularioConsultarIdComponent } from './formulario-consultar-id/formulario-consultar-id.component';
import { FormularioConsultarFechaComponent } from './formulario-consultar-fecha/formulario-consultar-fecha.component';

const routes: Routes = [
  { path: 'equipos/listar', component: ListaEquiposComponent },
  { path: 'equipos/crear', component: FormularioRegistroComponent },
  { path: 'equipos/actualizar/:id', component: FormularioModificacionComponent },
  { path: 'equipos/eliminar/:id', component: FormularioEliminacionComponent },
  { path: 'equipos/consultar/:id', component: FormularioConsultarIdComponent },
  { path: 'equipos/consultar/:inicio/:fin', component: FormularioConsultarFechaComponent },
  { path: '', redirectTo: '/equipos/listar', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
