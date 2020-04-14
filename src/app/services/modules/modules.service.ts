import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from 'src/app/intefaces/module.interfaces';
import { map } from 'rxjs/operators';
import { URLDEV  } from '../../config/index.config'

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  

  constructor( private _http: HttpClient ) { }


  getModules( role: any ) {

    let url = URLDEV + '/modules';
    
    let modulosRole = {
      role
    }

  return  this._http.post( url, modulosRole )
    .pipe( map( (modules: Module[]) => {
      console.log( modules );
       return modules;
    }) )
  }
 
}
