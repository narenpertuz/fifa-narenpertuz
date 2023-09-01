import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioModificacionComponent } from './formulario-modificacion/formulario-modificacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormularioEliminacionComponent } from './formulario-eliminacion/formulario-eliminacion.component';
import { FormularioConsultarIdComponent } from './formulario-consultar-id/formulario-consultar-id.component';
import { FormularioConsultarFechaComponent } from './formulario-consultar-fecha/formulario-consultar-fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEquiposComponent,
    FormularioRegistroComponent,
    FormularioModificacionComponent,
    MenuComponent,
    LoginComponent,
    FormularioEliminacionComponent,
    FormularioConsultarIdComponent,
    FormularioConsultarFechaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
