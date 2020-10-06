import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';

// modules

import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder  } from '@angular/forms';

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
import { TabuladorPagosComponent } from './pagosMaternidad/tabulador-pagos/tabulador-pagos.component';

import { EstudiosComponent } from './servivicosInt/laboratorio/estudios/estudios.component';
import { PerfilesComponent } from './servivicosInt/laboratorio/perfiles/perfiles.component';
import { ContratacionComponent } from './servivicosInt/laboratorio/contratacion/contratacion.component';
import { PendientesComponent } from './servivicosInt/laboratorio/pendientes/pendientes.component';
import { AmbulanciaEditComponent } from './servivicosInt/ambulancia-edit/ambulancia-edit.component';
import { AmbulanciaNewComponent } from './servivicosInt/ambulancia-new/ambulancia-new.component';
import { XrayEditComponent } from './servivicosInt/vistas/xray-edit/xray-edit.component';
import { XrayNewComponent } from './servivicosInt/vistas/xray-new/xray-new.component';
import { OtrosNewComponent } from './servivicosInt/vistas/otros-new/otros-new.component';
import { OtrosEditComponent } from './servivicosInt/vistas/otros-edit/otros-edit.component';
import { EndoscopiaNewComponent } from './servivicosInt/vistas/Endoscopia/endoscopia-new/endoscopia-new.component';
import { EndoscopiaEditComponent } from './servivicosInt/vistas/Endoscopia/endoscopia-edit/endoscopia-edit.component';
// import { TomografiaNewComponent } from './servivicosInt/vistas/Tomografia/tomografia-new/tomografia-new.component';
// import { TomografiaEditComponent } from './servivicosInt/vistas/Tomografia/tomografia-edit/tomografia-edit.component';
import { UltrasonidoEditComponent } from './servivicosInt/vistas/Ultrasonido/ultrasonido-edit/ultrasonido-edit.component';
import { UltrasonidoNewComponent } from './servivicosInt/vistas/Ultrasonido/ultrasonido-new/ultrasonido-new.component';

import { PreciosMembresiaComponent } from './servivicosInt/laboratorio/precios-membresia/precios-membresia.component';
import { NuevoLabComponent } from './servivicosInt/laboratorio/nuevo-lab/nuevo-lab.component';
import { PedidoSinComponent } from './laboratorio/entregas/pedido-sin/pedido-sin.component';
import { PedidosLaboratorioComponent } from './laboratorio/laboratorioUser/pedidos-laboratorio/pedidos-laboratorio.component';
import { FE09Component } from './Enfermeria/Fichas/fe09/fe09.component';
import { PedidoIndividualComponent } from './laboratorio/pedidos/pedido-individual/pedido-individual.component';
import { TabuladorAltoriesgoComponent } from './paquetes/altoRiesgo/tabulador-altoriesgo/tabulador-altoriesgo.component';
import { PatologiaComponent } from './servivicosInt/patologia/patologia.component';
import { PatologiaEditComponent } from './servivicosInt/patologia/patologia-edit/patologia-edit/patologia-edit.component';
import { PatologiaNewComponent } from './servivicosInt/patologia/patologia-new/patologia-new.component';
import { HojaDiariaEnfGralComponent } from './Hojas_Diarias/hoja-diaria-enf-gral/hoja-diaria-enf-gral.component';
import { HojaDiariaEnfUrgenciaComponent } from './Hojas_Diarias/hoja-diaria-enf-urgencia/hoja-diaria-enf-urgencia.component';
import { EnfermeriaDashboardComponent } from './Enfermeria/enfermeria-dashboard/enfermeria-dashboard.component';
// import { DashComponent } from './farmacia/dash/dash.component';
import { ConsultaGeneralComponent } from './consultas/consulta-general/consulta-general.component';
import { PaqueteMedicoLaboralComponent } from './paquete-medico-laboral/paquete-medico-laboral.component';
import { PediatricoComponent } from './contratos/pediatrico/pediatrico.component';
import { SolicitudMembresiaComponent } from './solicitudMembresia/solicitud-membresia/solicitud-membresia.component';
import { IdentificacionComponent } from './identificacion/identificacion/identificacion.component';
import { QuirofanoFormComponent } from './Quirofanos/quirofano-form/quirofano-form.component';
import { CrearPaquetesComponent } from './crearPaquetes/crear-paquetes/crear-paquetes.component';
import { JefaturaEnfermeriaComponent } from './indicadores/jefatura-enfermeria/jefatura-enfermeria.component';
import { ChartsModule } from 'ng2-charts';
import { HEvolucionCGComponent } from './Doctores/hevolucion-cg/hevolucion-cg.component';
import { HEvolucionCEComponent } from './Doctores/hevolucion-ce/hevolucion-ce.component';
import { HIngresoHospitalComponent } from './Doctores/h-ingreso-hospital/h-ingreso-hospital.component'

import { HojaDiariaComponent } from './indicadores/jefaturaEnfermeria/hoja-diaria/hoja-diaria.component';
import { EncuestaComponent } from './indicadores/jefaturaEnfermeria/encuesta/encuesta.component';
import { MaqYMedicamentosPaqueteComponent } from './servivicosInt/quirofano/maq-ymedicamentos-paquete/maq-ymedicamentos-paquete.component';
import { DashIndicadoresComponent } from './indicadores/dash-indicadores/dash-indicadores.component';
import { CrearPaquetesDirective } from './crear-paquetes.directive';
import { AgregarMedicmentoDirective } from './agregar-medicmento.directive';
import { HojaDiariaHospitalizacionComponent } from './hoja-diaria-hospitalizacion/hoja-diaria-hospitalizacion.component';
import { PaqueteQuirofanoComponent } from './paquetes/paquete-quirofano/paquete-quirofano.component';
import { BitacoraHospitalizacionComponent } from './paquetes/bitacora-hospitalizacion/bitacora-hospitalizacion.component';
import { HojaDiariaConsumoComponent } from './hoja-diaria-hospitalizacion/hoja-diaria-consumo/hoja-diaria-consumo.component'
import { PacientesPipe } from '../pipes/pacientes.pipe';
import { from } from 'rxjs';
import { NuevaResonanciaComponent } from './servivicosInt/resonancia/nueva-resonancia/nueva-resonancia.component';
import { ResonanciaEditComponent } from './servivicosInt/resonancia/resonancia-edit/resonancia-edit.component';
import { TomografiaNuevoComponent } from './servivicosInt/tomografia/tomografia-nuevo/tomografia-nuevo.component';
import { TomografiaEditComponent  } from './servivicosInt/tomografia/tomografia-edit/tomografia-edit.component';
import { FarmaciaDashComponent } from './farmacia/farmacia-dash/farmacia-dash.component';
import { AgregarComponent } from './farmacia/agregar/agregar.component';
import { ObtenermedicamentosComponent } from './farmacia/dash/obtenermedicamentos/obtenermedicamentos.component';
import { ConsultasGralComponent } from './servivicosInt/consulta-md-gral/consultas-gral/consultas-gral.component';
import { PendientePacienteComponent } from './pendientes/pendiente-paciente/pendiente-paciente.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {NgStepperModule} from 'angular-ng-stepper';
import { VerPacienteComponent } from './pacientes/ver-paciente/ver-paciente.component';
import { CommonModule } from '@angular/common';


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
    // TomografiaNewComponent,
    // TomografiaEditComponent,
    UltrasonidoEditComponent,
    UltrasonidoNewComponent,
    PagosMaternidadComponent,
    TabuladorPagosComponent,
    EstudiosComponent,
    PerfilesComponent,
    ContratacionComponent,
    PendientesComponent,
    PreciosMembresiaComponent,
    NuevoLabComponent,
    HojaFramComponent,
    PedidoSinComponent,
    PedidosLaboratorioComponent,
    FE09Component,
    PedidoIndividualComponent,
    TabuladorAltoriesgoComponent,
    PatologiaComponent,
    PatologiaEditComponent,
    PatologiaNewComponent,
    HojaDiariaEnfGralComponent,
    HojaDiariaEnfUrgenciaComponent,
    EnfermeriaDashboardComponent,
    // DashComponent,
    ConsultaGeneralComponent,
    PaqueteMedicoLaboralComponent,
    PediatricoComponent,
    SolicitudMembresiaComponent,
    IdentificacionComponent,
    QuirofanoFormComponent,
    CrearPaquetesComponent,
    JefaturaEnfermeriaComponent,
    PacientesPipe,
    HEvolucionCGComponent,
    HEvolucionCEComponent,
    HIngresoHospitalComponent,
    HojaDiariaComponent,
    EncuestaComponent,
    MaqYMedicamentosPaqueteComponent,
    DashIndicadoresComponent,
    CrearPaquetesDirective,
    AgregarMedicmentoDirective,
    HojaDiariaHospitalizacionComponent,
    PaqueteQuirofanoComponent,
    DashIndicadoresComponent,
    BitacoraHospitalizacionComponent,
    HojaDiariaConsumoComponent,
    NuevaResonanciaComponent,
    ResonanciaEditComponent,
    TomografiaNuevoComponent,
    TomografiaEditComponent,
    AgregarComponent,
    ConsultasGralComponent,
    PendientePacienteComponent,
    RegistroPacientesComponent,
    VerPacienteComponent
  ],

  exports: [
    PageComponent,
    ReactiveFormsModule,
    CdkStepperModule,
    NgStepperModule,
  ],

  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    PAGES_ROUTES,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    NgxPaginationModule,
    CommonModule

  ]


})


export class PageModule {  }
