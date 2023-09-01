import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from '../equipo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-eliminacion',
  templateUrl: './formulario-eliminacion.component.html',
  styleUrls: ['./formulario-eliminacion.component.css']
})
export class FormularioEliminacionComponent implements OnInit {
  equipoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private equipoService: EquipoService,
    private snackBar: MatSnackBar
  ) {
    this.equipoForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.equipoForm.valid) {
      const id: number = this.equipoForm.value.id;

      this.equipoService.eliminarEquipo(id).subscribe(
        response => {
          console.log('Equipo eliminado exitosamente', response);
          this.openSnackBar('El equipo se eliminó exitosamente', 'success');
        },
        error => {
          console.error('Error al eliminar el equipo', error);
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
