import {RouterModule,  Routes } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { PageComponent } from './pages/page/page.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { VerPaquetesComponent } from './pages/ver-paquetes/ver-paquetes.component';
import { PaqueteIdComponent } from './pages/paquete-id/paquete-id.component';

//============================
// Rutas pricipales
//============================


const appRoutes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'solicitud/:id', component: SolicitudComponent },
            { path: 'consultar/paquetes', component: VerPaquetesComponent },
            { path: 'paquete/:id', component: PaqueteIdComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
      },
    { path: 'login', component:LoginComponent  },
    { path: '**', component: LoginComponent }
    // Alguna ruta que no definida muestra el componente login
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
