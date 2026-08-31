import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../Services/servicio.service';
import { Servicio } from '../../Interfaces/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: false,
  templateUrl: './servicios.component.html'
})
export class ServiciosComponent implements OnInit {
  heading = 'Catálogo de Servicios';
  subheading = 'Gestión de servicios ofrecidos';
  icon = 'pe-7s-config icon-gradient bg-warm-flame';

  servicios: Servicio[] = [];

  constructor(private servicioService: ServicioService, private router: Router) {}

  ngOnInit(): void {
    this.servicios = this.servicioService.getServiciosCached();
    this.cargarServicios();
  }

  cargarServicios(): void {
    this.servicioService.getServicios().subscribe({
      next: (data) => (this.servicios = data),
      error: (err) => console.error(err)
    });
  }

  nuevoServicio(): void {
    this.router.navigate(['/servicios/nuevo']);
  }

  editarServicio(id: number): void {
    this.router.navigate([`/servicios/editar/${id}`]);
  }

  eliminarServicio(id: number): void {
    if (confirm('¿Desea eliminar este servicio?')) {
      this.servicioService.deleteServicio(id).subscribe(() => this.cargarServicios());
    }
  }
}