import { Component } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo.model';

@Component({
  selector: 'app-formulario-consultar-id',
  templateUrl: './formulario-consultar-id.component.html',
  styleUrls: ['./formulario-consultar-id.component.css']
})
export class FormularioConsultarIdComponent {
  id: number = 0;
  equipo: Equipo | null = null;

  constructor(private equipoService: EquipoService) { }

  consultarEquipo() {
    if (this.id) {
      this.equipoService.consultarEquipoPorId(this.id).subscribe(
        (response) => {
          this.equipo = response;
        },
        (error) => {
          console.error('Error al consultar el equipo por ID', error);
          this.equipo = null;
        }
      );
    }
  }
}
