import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from '../config/index.config'

@Injectable({
  providedIn: 'root'
})
export class IdentificacionConsultaService {

  constructor(  private _http: HttpClient ) { }


  agregarConsulta( body ){


    let url = `${URLDEV}/consultas/general/identificacion`;


    return this._http.post(url, body);


  }


}
