import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-modificacion',
  templateUrl: './formulario-modificacion.component.html',
  styleUrls: ['./formulario-modificacion.component.css']
})
export class FormularioModificacionComponent {
  equipoForm: FormGroup;
  id: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private equipoService: EquipoService,
    private snackBar: MatSnackBar
  ) {
    this.equipoForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      estadio: ['', Validators.required],
      sitioWeb: [''],
      nacionalidad: ['', Validators.required],
      fundacion: ['', Validators.required],
      entrenador: [''],
      capacidad: [''],
      valor: ['']
    });
  }

  onSubmit() {
    if (this.equipoForm.valid) {
      const equipoData: Equipo = this.equipoForm.value;
      this.id = equipoData.id;

      this.equipoService.actualizarEquipo(this.id, equipoData).subscribe(
        response => {
          console.log('Equipo actualizado exitosamente', response);
          this.openSnackBar('El equipo se actualizó exitosamente', 'success');
          this.equipoForm.reset();
        },
        error => {
          console.error('Error al actualizar el equipo', error);
          this.openSnackBar('Hubo un error al actualizar el equipo. Por favor, inténtalo más tarde.', 'error');
        }
      );
    }
  }

  openSnackBar(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      panelClass: type === 'success' ? 'snackbar-success' : 'snackbar-error',
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
}