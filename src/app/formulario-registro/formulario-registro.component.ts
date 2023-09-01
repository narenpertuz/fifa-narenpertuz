import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
  equipoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private equipoService: EquipoService,
    private snackBar: MatSnackBar
  ) {
    this.equipoForm = this.formBuilder.group({
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
      this.equipoService.registrarEquipo(equipoData).subscribe(
        response => {
          console.log('Equipo registrado exitosamente', response);
          this.openSnackBar('El equipo se registró exitosamente', 'success');
          this.equipoForm.reset();
        },
        error => {
          console.error('Error al registrar el equipo', error);
          this.openSnackBar('Hubo un error al registrar el equipo. Por favor, inténtalo más tarde.', 'error');
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