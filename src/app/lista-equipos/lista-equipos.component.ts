import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo.model';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos(): void {
    this.equipoService.getEquipos().subscribe(response => {
      this.equipos = response.content;
    });
  }
}
