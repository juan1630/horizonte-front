import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { URLDEV } from '../config/index.config'

@Injectable({
  providedIn: 'root'
})
export class IdentificacionConsultaService {

  constructor(  private _http: HttpClient ) { }


  agregarConsulta( body ){


    let url = `https://sleepy-tor-20835.herokuapp.com/consultas/general/identificacion`;


    return this._http.post(url, body);
  }


  verConsultaIdentificacion(){

    let url = `https://sleepy-tor-20835.herokuapp.com/ver/consultas/identificacion`;

    return this._http.get(  url );

  }


}
