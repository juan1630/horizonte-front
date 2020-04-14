import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginGuardGuard, LoginService } from './index.services';
import { ModalServiceService } from '../components/modal/modal-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    LoginService,
    ModalServiceService,
    LoginGuardGuard
  ]
})
export class ServicesModule { }
