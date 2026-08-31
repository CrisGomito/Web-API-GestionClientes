import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../Services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cliente',
  standalone: false,
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {
  heading = 'Formulario de Cliente';
  subheading = 'Crear o editar registro de cliente';
  icon = 'pe-7s-add-user icon-gradient bg-arielle-smile';

  formCliente: FormGroup;
  esEdicion = false;
  idCliente: number = 0;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formCliente = this.fb.group({
      id: [0],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      ruc: ['', [Validators.required, Validators.pattern('^[0-9]{10,13}$')]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.idCliente = +idParam;
      this.esEdicion = true;
      this.clienteService.getCliente(this.idCliente).subscribe(cli => {
        this.formCliente.patchValue(cli);
      });
    }
  }

  guardar(): void {
    if (this.formCliente.invalid) return;

    const clienteData = this.formCliente.value;
    if (this.esEdicion) {
      this.clienteService.updateCliente(this.idCliente, clienteData).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    } else {
      this.clienteService.createCliente(clienteData).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }
}