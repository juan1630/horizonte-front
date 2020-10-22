import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {   getDataStorage  } from '../../functions/storage/storage.funcion'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfermeriaGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

       let usuario =  getDataStorage();
      //  console.log(   );

      if(usuario.role  == 'enfermeria' ){

        return true;
      }

      return false;

  }

}
