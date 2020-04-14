import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
      FormsModule,
      RouterModule
  ],
  exports: [ LoginComponent ]
})


export class LoginModule { }
