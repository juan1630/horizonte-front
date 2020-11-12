import { Routes, RouterModule } from '@angular/router';

// components
import { PageComponent } from './page/page.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AmbulanciaSIComponent } from './servivicosInt/ambulancia/ambulancia-s-i.component';
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
import { PerfilesComponent } from './servivicosInt/laboratorio/perfiles/perfiles.component';
import { TabuladorPagosComponent } from './pagosMaternidad/tabulador-pagos/tabulador-pagos.component';
import { EstudiosComponent } from './servivicosInt/laboratorio/estudios/estudios.component';
import { PendientesComponent } from './servivicosInt/laboratorio/pendientes/pendientes.component';
import { ContratacionComponent } from './servivicosInt/laboratorio/contratacion/contratacion.component';
import { XrayEditComponent } from './servivicosInt/vistas/xray-edit/xray-edit.component';
import { XrayNewComponent } from './servivicosInt/vistas/xray-new/xray-new.component';
import { OtrosEditComponent } from './servivicosInt/vistas/otros-edit/otros-edit.component';
import { OtrosNewComponent } from './servivicosInt/vistas/otros-new/otros-new.component';
import { PreciosMembresiaComponent } from './servivicosInt/laboratorio/precios-membresia/precios-membresia.component';
import { NuevoLabComponent } from './servivicosInt/laboratorio/nuevo-lab/nuevo-lab.component';
import { UltrasonidoNewComponent } from './servivicosInt/vistas/Ultrasonido/ultrasonido-new/ultrasonido-new.component';
import { UltrasonidoEditComponent } from './servivicosInt/vistas/Ultrasonido/ultrasonido-edit/ultrasonido-edit.component';
import { EndoscopiaEditComponent } from './servivicosInt/vistas/Endoscopia/endoscopia-edit/endoscopia-edit.component';
import { EndoscopiaNewComponent } from './servivicosInt/vistas/Endoscopia/endoscopia-new/endoscopia-new.component';
// import { TomografiaNewComponent } from './servivicosInt/vistas/Tomografia/tomografia-new/tomografia-new.component';
// import { TomografiaEditComponent } from './servivicosInt/vistas/Tomografia/tomografia-edit/tomografia-edit.component';
import { ContratoMaternidadComponent } from '../contratos/contrato-maternidad/contrato-maternidad.component';
import { PedidoSinComponent } from './laboratorio/entregas/pedido-sin/pedido-sin.component';
import { TicketComponent } from '../contratos/ticket/ticket/ticket.component';
import { PedidosLaboratorioComponent } from './laboratorio/laboratorioUser/pedidos-laboratorio/pedidos-laboratorio.component';
import { ContratoMLaboralComponent } from '../contratos/contrato-m-laboral/contrato-m-laboral.component';
import { FE09Component } from '../pages/Enfermeria/Fichas/fe09/fe09.component';
import { PedidoIndividualComponent } from './laboratorio/pedidos/pedido-individual/pedido-individual.component';
import { TabuladorAltoriesgoComponent } from './paquetes/altoRiesgo/tabulador-altoriesgo/tabulador-altoriesgo.component';
import { PerfilesNewComponent } from './servivicosInt/laboratorio/perfiles/perfiles-new/perfiles-new.component';
import { PatologiaEditComponent } from './servivicosInt/patologia/patologia-edit/patologia-edit/patologia-edit.component';
import { PatologiaNewComponent } from './servivicosInt/patologia/patologia-new/patologia-new.component';
import { PatologiaComponent } from './servivicosInt/patologia/patologia.component';
import { HojaDiariaEnfGralComponent } from './Hojas_Diarias/hoja-diaria-enf-gral/hoja-diaria-enf-gral.component';
import { EnfermeriaDashboardComponent } from './Enfermeria/enfermeria-dashboard/enfermeria-dashboard.component';
// import { DashComponent } from './farmacia/dash/dash.component';
// import { ConsultaGeneralComponent } from './consultas/consulta-general/consulta-general.component';
import { ConsultaGeneralComponent } from '../pages/consultorio/consulta-general/consulta-general.component';
import { PaqueteMedicoLaboralComponent } from './paquete-medico-laboral/paquete-medico-laboral.component';
import { PediatricoComponent } from './contratos/pediatrico/pediatrico.component';
import { ContratoVidaPlenaComponent } from '../contratos/contratoVidaPlena/contrato-vida-plena/contrato-vida-plena.component';

import { SolicitudMembresiaComponent } from './solicitudMembresia/solicitud-membresia/solicitud-membresia.component';
import { IdentificacionComponent } from './identificacion/identificacion/identificacion.component';
import { ContratoNeonatalComponent } from '../contratos/neonatal/contrato-neonatal/contrato-neonatal.component';
import { AltoRiesgoComponent } from '../contratos/alto-riesgo/alto-riesgo.component';
import { CrearPaquetesComponent } from './crearPaquetes/crear-paquetes/crear-paquetes.component';
import { JefaturaEnfermeriaComponent } from './indicadores/jefatura-enfermeria/jefatura-enfermeria.component';

import { from } from 'rxjs';
import { HEvolucionCGComponent } from './Doctores/hevolucion-cg/hevolucion-cg.component';
import { HIngresoHospitalComponent } from './Doctores/h-ingreso-hospital/h-ingreso-hospital.component';

import { HojaDiariaComponent } from './indicadores/jefaturaEnfermeria/hoja-diaria/hoja-diaria.component';
import { EncuestaComponent } from './indicadores/jefaturaEnfermeria/encuesta/encuesta.component';
import { MaqYMedicamentosPaqueteComponent } from './servivicosInt/quirofano/maq-ymedicamentos-paquete/maq-ymedicamentos-paquete.component';
import { DashIndicadoresComponent } from '../pages/indicadores/dash-indicadores/dash-indicadores.component';
import { PaqueteQuirofanoComponent } from './paquetes/paquete-quirofano/paquete-quirofano.component';
import { BitacoraHospitalizacionComponent } from './paquetes/bitacora-hospitalizacion/bitacora-hospitalizacion.component';
import { HojaDiariaConsumoComponent } from './hoja-diaria-hospitalizacion/hoja-diaria-consumo/hoja-diaria-consumo.component';
import { NuevaResonanciaComponent } from './servivicosInt/resonancia/nueva-resonancia/nueva-resonancia.component';
import { ResonanciaEditComponent } from './servivicosInt/resonancia/resonancia-edit/resonancia-edit.component';
import { TomografiaNuevoComponent } from './servivicosInt/tomografia/tomografia-nuevo/tomografia-nuevo.component';
import { TomografiaEditComponent  } from './servivicosInt/tomografia/tomografia-edit/tomografia-edit.component';
import { FarmaciaDashComponent } from './farmacia/farmacia-dash/farmacia-dash.component';
import { AgregarComponent } from './farmacia/agregar/agregar.component';
import { ObtenermedicamentosComponent } from './farmacia/dash/obtenermedicamentos/obtenermedicamentos.component';
import { RecetaComponent } from '../pages/Doctores/receta/receta.component';
import { ConsultasGralComponent } from './servivicosInt/consulta-md-gral/consultas-gral/consultas-gral.component';
import { PendientePacienteComponent } from './pendientes/pendiente-paciente/pendiente-paciente.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { VerPacienteComponent } from './pacientes/ver-paciente/ver-paciente.component';
import { HojaDiariaEnfHospComponent } from './Hojas_Diarias/hoja-diaria-enf-hosp/hoja-diaria-enf-hosp.component';
import { MedicosGuard } from '../guards/validaciones/medicos.guard';
import { EnfermeriaGuard } from '../guards/validaciones/enfermeria.guard';
import { ValidarRecepcionGuard } from '../guards/validaciones/recpecion/validar-recepcion.guard';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    canActivate: [],
    children: [
      // aca se iran agregando las rutas para el dashboard
      { path: 'paciente', component: PacienteComponent, canActivate: [ValidarRecepcionGuard] },


      // REGISTRO DE PACIENTES
      {   path: 'registro/pacientes', component: RegistroPacientesComponent, canActivate: [ValidarRecepcionGuard ]  },
      // ruta del paciente de manera individual
      {   path: 'paciente/:id', component: VerPacienteComponent, canActivate:[ ValidarRecepcionGuard] },
      {   path: 'consultar/paquetes', component: PaquetesComponent },


      // consulta general

      { path: 'consulta/:id', component: ConsultaGeneralComponent, canActivate: [ValidarRecepcionGuard] },
      { path: 'consulta', component: ConsultaGeneralComponent, canActivate: [ValidarRecepcionGuard] },

      // SOLICITUDES
      {  path: 'hoja/solicitud/membresia/:id', component: SolicitudMembresiaComponent  },
      { path: 'solicitud/:id', component: SolicitudComponent },

      // PAQUETES

      // tabuladores de consultas
      { path: 'paqueteMaternidad/:id', component: PaqueteMaternidadComponent },
      { path: 'paquete/laboral/:id', component: PaqueteMedicoLaboralComponent  },
      { path: 'pagos/paquete/maternidad', component: PagosMaternidadComponent },
      { path: 'alto/riesgo/:id', component: TabuladorAltoriesgoComponent },

      // { path: 'membresia/:id', component: MembresiaPaqueteComponent },

      // { path: 'membresia/:id', component: MembresiaPaqueteComponent },
      // CONTRATOS DE LOS PAQUETES
      { path: 'contrato-medico-laboral', component: ContratoMLaboralComponent},
      { path: 'contrato-maternidad', component: ContratoMaternidadComponent },
      { path: 'contrato/pediatrico', component: PediatricoComponent },
      { path: 'contrato/vida/plena', component: ContratoVidaPlenaComponent },
      { path: 'contrato/neonatal', component: ContratoNeonatalComponent  },
      { path: 'anexo/alto/riesgo', component: AltoRiesgoComponent },

      // TABULADORES

      // TABULADOR DE PAGOS DEL PAQUETE DE MATERNIDAD
      { path: 'tabulador/pagos/:id', component: TabuladorPagosComponent },

      // crear paquetes de quirofano
      { path: 'crear/paquete', component: CrearPaquetesComponent  },
      // CREACION DE PAQUETES DE QUIROFANO
      { path: 'agregar/maquinas/medicamentos',  component: MaqYMedicamentosPaqueteComponent },


      // SERVICIOS INTEGRADOS

      { path: 'serviciosInt', component: ServiciosIntComponent  },
      { path: 'ambulancia', component: AmbulanciaSIComponent},
      { path: 'hoja-fram', component: HojaFramComponent},
      { path: 'consulta/especialista', component: ConsultaEspecialistaComponent},
      { path: 'medicina/general', component: ConsultaMedGralComponent},
      { path: 'endoscopia', component: EndoscopiaComponent},
      { path: 'entrega-resultados', component: ResultadosComponent},

      // INICA EL PROCESO DE LA HOSPITALIZACION
      { path: 'hospitalizacion', component: HospitalizacionComponent},
      { path: 'hoja/consumo/:id', component: HojaDiariaConsumoComponent  },
      { path: 'laboratorio', component: LaboratorioComponent},
      { path: 'quirofano', component: QuirofanoComponent},
      { path: 'xray', component: XraySIComponent},
      { path: 'resonancia', component: ResonanciaComponent},
      { path: 'tomografia', component: TomografiaComponent},
      { path: 'trabajo-social', component: TrabajoSocialComponent},
      { path: 'ultrasonido', component: UltrasonidoComponent},
      { path: 'urgencias', component: UrgenciasComponent},
      { path: 'otros-servicios', component: OtrosSIComponent},
      { path: 'ambulancia-editar/:id', component: AmbulanciaEditComponent },
      { path: 'ambulancia-nuevo', component: AmbulanciaNewComponent},
      { path: 'xray-editar/:id', component: XrayEditComponent},
      { path: 'xray-nuevo', component: XrayNewComponent},
      { path: 'xray-editar/:id', component: XrayEditComponent},
      { path: 'otros-editar/:id', component: OtrosEditComponent},
      { path: 'otros-nuevo', component: OtrosNewComponent},
      { path: 'ultrasonido-nuevo', component: UltrasonidoNewComponent},
      { path: 'ultrasonido-editar/:id', component: UltrasonidoEditComponent},
      { path: 'endoscopia-nuevo', component: EndoscopiaNewComponent},
      { path: 'endoscopia-editar/:id', component: EndoscopiaEditComponent},
      // { path: 'tomografia-nuevo', component: TomografiaNewComponent},
      // { path: 'tomografia-editar/:id', component: TomografiaEditComponent},




      { path: 'perfiles', component: PerfilesComponent },
      { path: 'estudios/laboratorio', component: EstudiosComponent },
      { path: 'laboratorio/pendientes', component: PedidosLaboratorioComponent },
      { path: 'laboratorio/contrato', component: ContratacionComponent },
      { path: 'laboratorio/estudios/:id', component: PreciosMembresiaComponent },
      { path: 'nuevo/laboratorio', component: NuevoLabComponent },
      { path: 'imprimir-ticket', component: TicketComponent},
      { path: 'perfiles/nuevo', component: PerfilesNewComponent  },
      { path: 'patologia', component: PatologiaComponent },
      { path: 'patologia/edit/:id', component: PatologiaEditComponent },
      { path: 'patologia/nueva', component: PatologiaNewComponent },
      { path: 'nueva/resonancia', component: NuevaResonanciaComponent  },
      { path: 'editar/resonancia/:id', component: ResonanciaEditComponent   },
      { path: 'nueva/tomografia', component: TomografiaNuevoComponent  },
      { path: 'editar/tomografia/:id', component:  TomografiaEditComponent  },




      // TERMINA EL AREA DE SERVICIOS INTREGADOS


      // INICIA EL AREA DE CONSULTA GENERAL
      { path: 'hoja-diaria-enfermeria-general', component: HojaDiariaEnfGralComponent , canActivate:[ MedicosGuard, EnfermeriaGuard]  },
      { path: 'enfermeria-dashboard', component: EnfermeriaDashboardComponent},
      { path: 'consulta-general/:id', component: ConsultaGeneralComponent},

      {path: 'consulta/medicina/general' , component: ConsultasGralComponent  },
      { path: 'ficha-enfermeria-01/:id', component: FE09Component},
      { path: 'paquete/quirofano/:id', component: PaqueteQuirofanoComponent },
      {  path: 'bitacora/hospitalizacion', component: BitacoraHospitalizacionComponent },

      // TERMINA EL AREA DE CONSULTA GENERAL
      // ESTAS RUTAS SON PARA EL CRUD DE FARMACIA

      // { path: 'farmacia/dash', component: DashComponent  },
      { path: 'farmacia', component: FarmaciaComponent},

      // TERMINA EL AREA DE FARMACIA



      { path: 'pendientes', component : PendientesComponent  },
      {path: 'pendientes/:id', component: PendientePacienteComponent},
      // LABORATORIO

      // hoja de solictud de servicios integrados y pago
      { path: 'pago/pedido/sin', component: PedidoSinComponent },
      // pedidos pendientes en lab
      { path: 'pedidos/pendientes/laboratorio', component: PedidosLaboratorioComponent  },
      // pedidos individuales en lab
      { path: 'pedido/laboratorios/:id', component: PedidoIndividualComponent },
      { path: 'laboratorio/pendientes/lab', component: PedidoSinComponent  },

      { path: 'ficha-enfermeria-01/:id', component: FE09Component},

      // Doctores
      { path: 'hoja-evolucion-cg/:id', component: HEvolucionCGComponent },
      { path: 'hoja-ingreso-hospitalario/:id', component: HIngresoHospitalComponent},
      { path: 'receta-medica/:id', component: RecetaComponent},



      // Hojas Diarias
      { path: 'hoja-diaria-enfermeria-hospitalizacion/:id', component: HojaDiariaEnfHospComponent},

      // PEDIDOS DE SERVICIOS

      { path: 'indicadores', component: DashIndicadoresComponent },
      // IDENTIFICACION


      // Nuevo Farmacia
      { path: 'farmacia/dash', component: FarmaciaDashComponent},
      { path: 'agregar/medicamento', component: AgregarComponent   },
      { path: 'ver/medicamentos', component: ObtenermedicamentosComponent},

      // termina farmacia

      { path: 'consulta/especialista', component: ConsultaEspecialistaComponent  },

      { path: 'identificacion/:id', component: IdentificacionComponent },
      { path: 'indicadores/enfermeria', component: JefaturaEnfermeriaComponent  },
      { path: 'identificacion', component: IdentificacionComponent },
      { path: 'hoja/diaria/jefatura/enfermeria', component: HojaDiariaComponent },
      // encuesat de jefatura de consulta general
      { path: 'indentificacion/jefatura/enfermeria/:id', component: EncuestaComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

    ]
  }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
