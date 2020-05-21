import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

const config: SocketIoConfig = { url: environment.swUrl , options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ContratoMaternidadComponent,
    ContratoMLaboralComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    LoginModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ServicesModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    APP_ROUTES
  ],
  exports: [  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
