import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Servicio } from '../Interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'https://localhost:7020/api/Servicios';
  private storageKey = 'cache_servicios';

  constructor(private http: HttpClient) {}

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.apiUrl).pipe(
      tap(data => localStorage.setItem(this.storageKey, JSON.stringify(data)))
    );
  }

  getServiciosCached(): Servicio[] {
    const cached = localStorage.getItem(this.storageKey);
    return cached ? JSON.parse(cached) : [];
  }

  getServicio(id: number): Observable<Servicio> {
    return this.http.get<Servicio>(`${this.apiUrl}/${id}`);
  }

  createServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.apiUrl, servicio).pipe(
      tap(() => localStorage.removeItem(this.storageKey))
    );
  }

  updateServicio(id: number, servicio: Servicio): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, servicio).pipe(
      tap(() => localStorage.removeItem(this.storageKey))
    );
  }

  deleteServicio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => localStorage.removeItem(this.storageKey))
    );
  }
}