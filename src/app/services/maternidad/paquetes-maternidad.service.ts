import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLMedicos, URLPaqueteUsuarios } from '../../config/index.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaquetesMaternidadService {

  constructor(private _http: HttpClient) { }

  getMedicos(){
    let URL = URLMedicos
    return this._http.get( URL )
    .pipe( map( ( data:any ) => {
      return data
    }))
  }

  // Este sera otro sevicio para ver los registros, osea la informacion que yo estare agregando de aqui
  getVisitas(){
    let URL = URLPaqueteUsuarios
    return this._http.get( URL )
    .pipe( map( ( data:any ) => {
      return data
    }))

  }

}
