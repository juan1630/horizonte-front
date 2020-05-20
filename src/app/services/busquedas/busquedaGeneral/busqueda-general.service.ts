import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URLDEV } from 'src/app/config/index.config';

@Injectable({
  providedIn: 'root'
})
export class BusquedaGeneralService {

  constructor(
    private _http: HttpClient
  ) { }


  getAllDepartments( termino:string ) {
    console.log( termino);
    let url = `${URLDEV}/todos/servicios/busqueda/${termino}`;
    return this._http.get(url);
  }


}
