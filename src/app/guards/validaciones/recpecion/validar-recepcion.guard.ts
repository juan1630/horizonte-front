import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { getDataStorage } from '../../../functions/storage/storage.funcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarRecepcionGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      let usuarioRole = getDataStorage().role;

      if( usuarioRole == 'recepcion' ){

        return true;
      }
      return false;

  }

}
