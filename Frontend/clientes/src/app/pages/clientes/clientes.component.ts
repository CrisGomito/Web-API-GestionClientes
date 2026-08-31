import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../Services/cliente.service';
import { Cliente } from '../../Interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  heading = 'Gestión de Clientes';
  subheading = 'Administración de la cartera de clientes de la empresa';
  icon = 'pe-7s-users icon-gradient bg-mean-fruit';

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientesCached();
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (data) => (this.clientes = data),
      error: (err) => console.error('Error al obtener clientes:', err)
    });
  }

  nuevoCliente(): void {
    this.router.navigate(['/clientes/nuevo']);
  }

  editarCliente(id: number): void {
    this.router.navigate([`/clientes/editar/${id}`]);
  }

  eliminarCliente(id: number): void {
    if (confirm('¿Está seguro de eliminar este cliente?')) {
      this.clienteService.deleteCliente(id).subscribe(() => {
        this.cargarClientes();
      });
    }
  }
}