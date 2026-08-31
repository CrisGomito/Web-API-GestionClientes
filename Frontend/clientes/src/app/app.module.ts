import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { configReducer } from './ThemeOptions/store/config.reducer.ngrx';
import { ConfigService } from './ThemeOptions/store/config.service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// BOOTSTRAP COMPONENTS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Shared Module (Mantenemos este porque usualmente tiene el app-page-title)
import { SharedModule } from './shared.module';

// LAYOUT
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// HEADER
import { HeaderComponent } from './Layout/Components/header/header.component';
import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';
import { NotificationsBoxComponent } from './Layout/Components/header/elements/notifications-box/notifications-box';
import { MessagesBoxComponent } from './Layout/Components/header/elements/messages-box/messages-box';

// SIDEBAR
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER
import { FooterComponent } from './Layout/Components/footer/footer.component';

// NUESTROS COMPONENTES
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NuevoClienteComponent } from './pages/clientes/nuevo-cliente/nuevo-cliente.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { NuevoEmpleadoComponent } from './pages/empleados/nuevo-empleado/nuevo-empleado.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NuevoServicioComponent } from './pages/servicios/nuevo-servicio/nuevo-servicio.component';

// ThemeOptions
import { ThemeOptions } from './theme-options';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,

    // HEADER
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,
    NotificationsBoxComponent,
    MessagesBoxComponent,

    // SIDEBAR
    SidebarComponent,
    LogoComponent,

    // FOOTER
    FooterComponent,

    // NUESTROS COMPONENTES DECLARADOS
    ClientesComponent,
    NuevoClienteComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
    ServiciosComponent,
    NuevoServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ config: configReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CommonModule,

    // Angular Bootstrap Components
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Feature Modules necesarios
    SharedModule
  ],
  providers: [
    ConfigService,
    ThemeOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }