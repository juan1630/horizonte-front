import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from '../config/index.config';

@Injectable({
  providedIn: 'root'
})
export class PendientesContratosService {

  constructor(
    private _http: HttpClient
  ) { }


  verPendientes(){
    let url = `http://localhost:3200/contratos/pendientes`;

    return this._http.get( url );


  }


}
