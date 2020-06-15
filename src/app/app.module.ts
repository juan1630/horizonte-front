import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { LoginModule } from './login/login/login.module';
import { PageModule } from './pages/page.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';

// // SOCKET 
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { ContratoMaternidadComponent } from './contratos/contrato-maternidad/contrato-maternidad.component';
import { ContratoMLaboralComponent } from './contratos/contrato-m-laboral/contrato-m-laboral.component';
import { jqxCalendarModule } from 'jqwidgets-ng/jqxcalendar';
import { TicketComponent } from './contratos/ticket/ticket/ticket.component';

const config: SocketIoConfig = { url: environment.swUrl , options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ContratoMaternidadComponent,
    ContratoMLaboralComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    LoginModule,
    ComponentsModule,
    HttpClientModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    jqxCalendarModule,
    SocketIoModule.forRoot(config),
    APP_ROUTES
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
