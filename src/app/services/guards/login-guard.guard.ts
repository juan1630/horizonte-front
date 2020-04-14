import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';
@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _loginService: LoginService,
                public router: Router ) {

                  this._loginService.cargarStorage();
                }

  canActivate() {

    if(   this._loginService.estaLogeado() ){
      console.log( 'Paso el guard' );
      return true;

    }else{

      console.log('No paso el guard', this._loginService.estaLogeado());
      this.router.navigate(['/login']);
      return false;
    }

  }

}
