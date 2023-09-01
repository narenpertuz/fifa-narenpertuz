import { Component } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo.model';

@Component({
  selector: 'app-formulario-consultar-fecha',
  templateUrl: './formulario-consultar-fecha.component.html',
  styleUrls: ['./formulario-consultar-fecha.component.css']
})
export class FormularioConsultarFechaComponent {
  inicio: string = '';
  fin: string = '';
  equipo: Equipo[] = [];

  constructor(private equipoService: EquipoService) { }

  consultarEquiposPorFecha() {
    if (this.inicio && this.fin) {
      this.equipoService.consultarEquipoPorFecha(this.inicio, this.fin).subscribe(
        (equipo: Equipo[]) => {
          this.equipo = equipo;
        },
        (error) => {
          console.error('Error al consultar el equipo por fecha', error);
        }
      );
    }
  }
}
