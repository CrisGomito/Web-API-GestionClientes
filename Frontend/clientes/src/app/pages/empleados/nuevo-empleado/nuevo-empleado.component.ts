import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../../Services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  standalone: false,
  templateUrl: './nuevo-empleado.component.html'
})
export class NuevoEmpleadoComponent implements OnInit {
  heading = 'Formulario de Empleado';
  subheading = 'Crear o editar registro de empleado';
  icon = 'pe-7s-user icon-gradient bg-arielle-smile';

  formEmpleado: FormGroup;
  esEdicion = false;
  idEmpleado: number = 0;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formEmpleado = this.fb.group({
      id: [0],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      cargo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      sueldo: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.idEmpleado = +idParam;
      this.esEdicion = true;
      this.empleadoService.getEmpleado(this.idEmpleado).subscribe(emp => {
        this.formEmpleado.patchValue(emp);
      });
    }
  }

  guardar(): void {
    if (this.formEmpleado.invalid) return;

    const empleadoData = this.formEmpleado.value;
    if (this.esEdicion) {
      this.empleadoService.updateEmpleado(this.idEmpleado, empleadoData).subscribe(() => {
        this.router.navigate(['/empleados']);
      });
    } else {
      this.empleadoService.createEmpleado(empleadoData).subscribe(() => {
        this.router.navigate(['/empleados']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/empleados']);
  }
}