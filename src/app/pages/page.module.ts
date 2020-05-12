import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';


// modules

import { ComponentsModule } from '../components/components.module';
import {   FormsModule  } from '@angular/forms';

import {PAGES_ROUTES } from './page.routes';

// componentes
import { PageComponent } from './page/page.component';
import { PacienteComponent } from './paciente/paciente.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { VerPaquetesComponent } from './ver-paquetes/ver-paquetes.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PaqueteIdComponent } from './paquete-id/paquete-id.component';
import { ServiciosIntComponent } from './servicios-int/servicios-int.component';
import { ConsultaMedGralComponent } from './servivicosInt/consulta-med-gral/consulta-med-gral.component';
import { EndoscopiaComponent } from './servivicosInt/endoscopia/endoscopia.component';
import { ResultadosComponent } from './servivicosInt/resultados/resultados.component';
import { FarmaciaComponent } from './servivicosInt/farmacia/farmacia.component';
import { HospitalizacionComponent } from './servivicosInt/hospitalizacion/hospitalizacion.component';
import { LaboratorioComponent } from './servivicosInt/laboratorio/laboratorio.component';
import { QuirofanoComponent } from './servivicosInt/quirofano/quirofano.component';
import { ResonanciaComponent } from './servivicosInt/resonancia/resonancia.component';
import { TomografiaComponent } from './servivicosInt/tomografia/tomografia.component';
import { TrabajoSocialComponent } from './servivicosInt/trabajo-social/trabajo-social.component';
import { UltrasonidoComponent } from './servivicosInt/ultrasonido/ultrasonido.component';
import { UrgenciasComponent } from './servivicosInt/urgencias/urgencias.component';
import { OtrosSIComponent } from './servivicosInt/otros/otros-s-i.component';
import { PaqueteMaternidadComponent } from './paquete-maternidad/paquete-maternidad.component';
import { AmbulanciaSIComponent } from './servivicosInt/ambulancia/ambulancia-s-i.component';
import { ConsultaEspecialistaComponent } from './servivicosInt/consulta-especialista/consulta-especialista.component';
import { AgendaComponent } from './agenda/agenda/agenda.component';
import { XraySIComponent } from './servivicosInt/xray/xray-s-i.component';
import { PagosMaternidadComponent } from './pagos/pagos-maternidad/pagos-maternidad.component';
import { HojaFramComponent } from './servivicosInt/hoja-fram/hoja-fram.component';
// import { TabuladorPagosComponent } from './pagosMaternidad/tabulador-pagos/tabulador-pagos.component';
// import { MaternidadComponent } from './contrato/maternidad/maternidad.component';
// import { FechasPipe } from './fechas.pipe';
// import { EstudiosComponent } from './servivicosInt/laboratorio/estudios/estudios.component';
// import { PerfilesComponent } from './servivicosInt/laboratorio/perfiles/perfiles.component';
// import { ContratacionComponent } from './servivicosInt/laboratorio/contratacion/contratacion.component';
// import { PendientesComponent } from './servivicosInt/laboratorio/pendientes/pendientes.component';
import { AmbulanciaEditComponent } from './servivicosInt/ambulancia-edit/ambulancia-edit.component';
import { AmbulanciaNewComponent } from './servivicosInt/ambulancia-new/ambulancia-new.component';
import { XrayEditComponent } from './servivicosInt/vistas/xray-edit/xray-edit.component';
import { XrayNewComponent } from './servivicosInt/vistas/xray-new/xray-new.component';
import { OtrosNewComponent } from './servivicosInt/vistas/otros-new/otros-new.component';
import { OtrosEditComponent } from './servivicosInt/vistas/otros-edit/otros-edit.component';
import { EndoscopiaNewComponent } from './servivicosInt/vistas/Endoscopia/endoscopia-new/endoscopia-new.component';
import { EndoscopiaEditComponent } from './servivicosInt/vistas/Endoscopia/endoscopia-edit/endoscopia-edit.component';
import { TomografiaNewComponent } from './servivicosInt/vistas/Tomografia/tomografia-new/tomografia-new.component';
import { TomografiaEditComponent } from './servivicosInt/vistas/Tomografia/tomografia-edit/tomografia-edit.component';
import { UltrasonidoEditComponent } from './servivicosInt/vistas/Ultrasonido/ultrasonido-edit/ultrasonido-edit.component';
import { UltrasonidoNewComponent } from './servivicosInt/vistas/Ultrasonido/ultrasonido-new/ultrasonido-new.component';



@NgModule({
  declarations: [
    PageComponent,
    PacienteComponent,
    SolicitudComponent,
    VerPaquetesComponent,
    PaquetesComponent,
    PaqueteIdComponent,
    ServiciosIntComponent,
    AmbulanciaSIComponent,
    ConsultaEspecialistaComponent,
    ConsultaMedGralComponent,
    EndoscopiaComponent,
    ResultadosComponent,
    FarmaciaComponent,
    HospitalizacionComponent,
    LaboratorioComponent,
    QuirofanoComponent,
    XraySIComponent,
    ResonanciaComponent,
    TomografiaComponent,
    TrabajoSocialComponent,
    UltrasonidoComponent,
    UrgenciasComponent,
    OtrosSIComponent,
    PaqueteMaternidadComponent,
    AgendaComponent,
    HojaFramComponent,
    AmbulanciaEditComponent,
    AmbulanciaNewComponent,
    XrayNewComponent,
    XrayEditComponent,
    OtrosNewComponent,
    OtrosEditComponent,
    EndoscopiaNewComponent,
    EndoscopiaEditComponent,
    TomografiaNewComponent,
    TomografiaEditComponent,
    UltrasonidoEditComponent,
    UltrasonidoNewComponent
  ],
  exports: [ 
    PageComponent,
    // PagosMaternidadComponent,
    PagosMaternidadComponent,
    HojaFramComponent
  ],
  imports: [
    ComponentsModule,
    PAGES_ROUTES,
    FormsModule,
    BrowserModule,
    RouterModule
  ]
})


export class PageModule { }
