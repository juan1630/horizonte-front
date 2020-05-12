import { Routes, RouterModule } from "@angular/router";

//components
import { PageComponent } from './page/page.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AmbulanciaSIComponent } from './servivicosInt/ambulancia/ambulancia-s-i.component'
import { ConsultaEspecialistaComponent } from './servivicosInt/consulta-especialista/consulta-especialista.component';
import {  ConsultaMedGralComponent } from './servivicosInt/consulta-med-gral/consulta-med-gral.component';
import { EndoscopiaComponent } from './servivicosInt/endoscopia/endoscopia.component';
import { ResultadosComponent } from './servivicosInt/resultados/resultados.component';
import { FarmaciaComponent } from './servivicosInt/farmacia/farmacia.component';
import { HospitalizacionComponent } from './servivicosInt/hospitalizacion/hospitalizacion.component';
import { LaboratorioComponent } from './servivicosInt/laboratorio/laboratorio.component';
import { QuirofanoComponent } from './servivicosInt/quirofano/quirofano.component';
import { XraySIComponent } from './servivicosInt/xray/xray-s-i.component';
import { ResonanciaComponent } from './servivicosInt/resonancia/resonancia.component';
import { TomografiaComponent } from './servivicosInt/tomografia/tomografia.component';
import { TrabajoSocialComponent } from './servivicosInt/trabajo-social/trabajo-social.component';
import { UltrasonidoComponent } from './servivicosInt/ultrasonido/ultrasonido.component';
import { UrgenciasComponent } from './servivicosInt/urgencias/urgencias.component';
import { OtrosSIComponent } from './servivicosInt/otros/otros-s-i.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ServiciosIntComponent } from './servicios-int/servicios-int.component';
import { AmbulanciaEditComponent } from './servivicosInt/ambulancia-edit/ambulancia-edit.component';
import { AmbulanciaNewComponent } from './servivicosInt/ambulancia-new/ambulancia-new.component';


// import { LoginGuardGuard } from '../services/index.services';
// import {  ServiciosIntComponent }  from './servicios-int/servicios-int.component';

import { PaqueteMaternidadComponent } from './paquete-maternidad/paquete-maternidad.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { PagosMaternidadComponent } from './pagos/pagos-maternidad/pagos-maternidad.component';
import { HojaFramComponent } from './servivicosInt/hoja-fram/hoja-fram.component';
import { XrayNewComponent } from './servivicosInt/vistas/xray-new/xray-new.component';
import { XrayEditComponent } from './servivicosInt/vistas/xray-edit/xray-edit.component';
import { OtrosNewComponent } from './servivicosInt/vistas/otros-new/otros-new.component';
import { OtrosEditComponent } from './servivicosInt/vistas/otros-edit/otros-edit.component';


// rutas hijas del dashboard
// LoginGuardGuard
const pagesRoutes : Routes = [
  {
    path: '',
    component: PageComponent,
    canActivate: [  ],
    children: [
      // aca se iran agregando las rutas para el dashboard
      { path: 'paciente', component: PacienteComponent },
      { path: 'consultar/paquetes', component:PaquetesComponent },
      { path: 'paqueteMaternidad', component: PaqueteMaternidadComponent },
      { path:'serviciosInt', component: ServiciosIntComponent  },
      {path: 'ambulancia', component: AmbulanciaSIComponent},
      { path: 'hoja-fram', component: HojaFramComponent},
      {path: 'consulta-Especialista', component: ConsultaEspecialistaComponent},
      {path: 'consulta-medica-general', component: ConsultaMedGralComponent},
      {path: 'endoscopia', component: EndoscopiaComponent},
      {path: 'entrega-resultados', component: ResultadosComponent},
      {path: 'farmacia', component: FarmaciaComponent},
      {path: 'hospitalizacion', component: HospitalizacionComponent},
      {path: 'laboratorio', component: LaboratorioComponent},
      {path: 'quirofano', component: QuirofanoComponent},
      {path: 'xray', component: XraySIComponent},
      {path: 'resonancia', component: ResonanciaComponent},
      {path: 'tomografia', component: TomografiaComponent},
      {path: 'trabajo-social', component: TrabajoSocialComponent},
      {path: 'ultrasonido', component: UltrasonidoComponent},
      {path: 'urgencias', component: UrgenciasComponent},
      {path: 'otros-servicios', component: OtrosSIComponent},
      { path:'solicitud/:id', component: SolicitudComponent },
      { path: 'ambulancia-editar/:id', component: AmbulanciaEditComponent },
      { path: 'ambulancia-nuevo', component: AmbulanciaNewComponent},
      { path: 'xray-editar/:id', component: XrayEditComponent},
      { path: 'xray-nuevo', component: XrayNewComponent},
      { path: 'xray-editar/:id', component: XrayEditComponent},
      { path: 'otros-editar/:id', component: OtrosEditComponent},
      { path: 'otros-nuevo', component: OtrosNewComponent},
      { path:'pagos/paquete/maternnidad', component:PagosMaternidadComponent },
      { path: '', redirectTo: '/dashboard', pathMatch:'full' }
    ]
  }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
