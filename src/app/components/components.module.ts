//==============
// MODULES
//==============
import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule  }  from '@angular/router'

//==============
// COMPONENTS
//==============



import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavBarComponent  }   from './nav-bar/nav-bar.component';
import { SideBarComponent  }  from './side-bar/side-bar.component';
import { CardComponent }      from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ModalServiciosIntComponent } from './modal/modal-servicios-int/modal-servicios-int.component';

import { CardPaquetesComponent } from './card-paquetes/card-paquetes.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';
import { TarjetaCotizacionComponent } from './cotizacion/tarjeta-cotizacion/tarjeta-cotizacion.component';
import { CalendarComponent } from './calendar/calendar.component';
import { jqxSchedulerModule, jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { ChatComponent } from './chat/chat/chat.component';

import { ChartsModule  } from 'ng2-charts'
import { GraficaComponent } from './grafica/grafica.component';
import { AgregarMaquinasComponent } from './crearPaquete/agregar-maquinas/agregar-maquinas.component';
import { CrearPaquetesComponent } from '../pages/crearPaquetes/crear-paquetes/crear-paquetes.component';
import { AgregarMedciametosComponent } from './agregarPaquete/agregar-medciametos/agregar-medciametos.component';
import { StepperComponent } from './stepper/stepper.component';
import {  MatStepper, MatStepperModule } from '@angular/material/stepper'

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    CardComponent,
    DashboardComponent,
    SearchBarComponent,
    ModalComponent,
    ModalServiciosIntComponent,
    SpinnerComponent,
    CardPaquetesComponent,
    TarjetaCotizacionComponent,
    CalendarComponent,
    ChatComponent,
    SearchBarComponent,
    GraficaComponent,
    AgregarMaquinasComponent,
    AgregarMedciametosComponent,
    StepperComponent
],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    NavBarComponent,
    CardComponent,
    SideBarComponent,
    SearchBarComponent,
    CardPaquetesComponent,
    ModalComponent,
    ModalServiciosIntComponent,
    TarjetaCotizacionComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    CalendarComponent,
    ChatComponent,
    GraficaComponent,
    StepperComponent
       ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    MatStepperModule,
    jqxSchedulerModule
  ],
  entryComponents:[
    AgregarMaquinasComponent,
    AgregarMedciametosComponent
  ],
  providers: [
    ModalServiciosIntComponent
  ]
})
export class ComponentsModule { }
