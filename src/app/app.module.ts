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
import { FilterPipe } from './pages/servivicosInt/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // FilterPipe,
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
    APP_ROUTES,
  ],
  exports: [ 
    FilterPipe 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
