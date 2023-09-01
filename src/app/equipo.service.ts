import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from './equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl = 'https://wo-fifa.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/equipos/listar/0/1000000000`);
  }

  registrarEquipo(equipo: Equipo): Observable<any> {
    return this.http.post(`${this.apiUrl}/equipos/crear`, equipo);
  }

  actualizarEquipo(id: number, equipo: Equipo): Observable<any> {
    return this.http.put(`${this.apiUrl}/equipos/actualizar/${id}`, equipo);
  }

  eliminarEquipo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/equipos/eliminar/${id}`);
  }

  consultarEquipoPorId(id: number): Observable<Equipo> {
    const url = `${this.apiUrl}/equipos/consultar/${id}`;
    return this.http.get<Equipo>(url);
  }

  consultarEquipoPorFecha(inicio: string, fin: string): Observable<Equipo[]> {
    const fechaInicio = this.formatearFecha(inicio);
    const fechaFin = this.formatearFecha(fin);

    const url = `${this.apiUrl}/equipos/consultar/${fechaInicio}/${fechaFin}`;
    return this.http.get<Equipo[]>(url);
  }

  private formatearFecha(fecha: string): string {
    const [año, mes, dia] = fecha.split('-');
    return `${dia}-${mes}-${año}`;
  }
}