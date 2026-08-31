import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Empleado } from '../Interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'https://localhost:7020/api/Empleados';
  private storageKey = 'cache_empleados';

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl).pipe(
      tap(data => localStorage.setItem(this.storageKey, JSON.stringify(data)))
    );
  }

  getEmpleadosCached(): Empleado[] {
    const cached = localStorage.getItem(this.storageKey);
    return cached ? JSON.parse(cached) : [];
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado).pipe(
      tap(() => localStorage.removeItem(this.storageKey))
    );
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, empleado).pipe(
      tap(() => localStorage.removeItem(this.storageKey))
    );
  }

  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => localStorage.removeItem(this.storageKey))
    );
  }
}