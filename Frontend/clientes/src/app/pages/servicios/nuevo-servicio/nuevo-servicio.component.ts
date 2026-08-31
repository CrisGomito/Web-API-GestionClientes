import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../../../Services/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-servicio',
  standalone: false,
  templateUrl: './nuevo-servicio.component.html'
})
export class NuevoServicioComponent implements OnInit {
  heading = 'Formulario de Servicio';
  subheading = 'Crear o modificar datos del servicio';
  icon = 'pe-7s-tools icon-gradient bg-midnight-bloom';

  formServicio: FormGroup;
  esEdicion = false;
  idServicio = 0;

  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formServicio = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      activo: [true]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.idServicio = +idParam;
      this.esEdicion = true;
      this.servicioService.getServicio(this.idServicio).subscribe(srv => {
        this.formServicio.patchValue(srv);
      });
    }
  }

  guardar(): void {
    if (this.formServicio.invalid) return;

    const data = this.formServicio.value;
    if (this.esEdicion) {
      this.servicioService.updateServicio(this.idServicio, data).subscribe(() => {
        this.router.navigate(['/servicios']);
      });
    } else {
      this.servicioService.createServicio(data).subscribe(() => {
        this.router.navigate(['/servicios']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/servicios']);
  }
}