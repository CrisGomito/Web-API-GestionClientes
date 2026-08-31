import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';

// Componentes
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NuevoClienteComponent } from './pages/clientes/nuevo-cliente/nuevo-cliente.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { NuevoEmpleadoComponent } from './pages/empleados/nuevo-empleado/nuevo-empleado.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NuevoServicioComponent } from './pages/servicios/nuevo-servicio/nuevo-servicio.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', redirectTo: 'clientes', pathMatch: 'full' },
      
      // Rutas Clientes
      { path: 'clientes', component: ClientesComponent },
      { path: 'clientes/nuevo', component: NuevoClienteComponent },
      { path: 'clientes/editar/:id', component: NuevoClienteComponent },

      // Rutas Empleados
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'empleados/nuevo', component: NuevoEmpleadoComponent },
      { path: 'empleados/editar/:id', component: NuevoEmpleadoComponent },

      // Rutas Servicios
      { path: 'servicios', component: ServiciosComponent },
      { path: 'servicios/nuevo', component: NuevoServicioComponent },
      { path: 'servicios/editar/:id', component: NuevoServicioComponent },
    ]
  },
  { path: '**', redirectTo: 'clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }