import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../Services/empleado.service';
import { Empleado } from '../../Interfaces/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  heading = 'Gestión de Empleados';
  subheading = 'Administración del personal de la empresa';
  icon = 'pe-7s-users icon-gradient bg-mean-fruit';

  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  ngOnInit(): void {
    // Carga rápida con almacenamiento local
    this.empleados = this.empleadoService.getEmpleadosCached();

    // Actualización de datos desde el backend
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => (this.empleados = data),
      error: (err) => console.error('Error al obtener empleados:', err)
    });
  }

  nuevoEmpleado(): void {
    this.router.navigate(['/empleados/nuevo']);
  }

  editarEmpleado(id: number): void {
    this.router.navigate([`/empleados/editar/${id}`]);
  }

  eliminarEmpleado(id: number): void {
    if (confirm('¿Está seguro de eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe(() => {
        this.cargarEmpleados();
      });
    }
  }
}