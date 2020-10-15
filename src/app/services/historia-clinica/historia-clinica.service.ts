import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {


  public url = 'http://localhost:3200';

  constructor( public _http: HttpClient ) {

    this.url = "https://sleepy-tor-20835.herokuapp.com"

  }

  agregarHistoriaClinica(historia):Observable<any>{

    return this._http.post( `${this.url}/agregar/AgregarAntecedentes`, historia);
  }


  agregarIdModelPaciente(id, idAntecedentes):Observable<any>{

    let uri = `${this.url}/agregar/antecedentes/${id}`;

    return this._http.put(uri, idAntecedentes)
  }


  obtenerAntecedentesDelPaciente(id){
    // console.log( id );
    return this._http.get(`${this.url}/ver/antecedentes/paciente/${id}`);
  }

  // obtener los signos viatales de un paciente en cosnultas anteriores

  obtenerHistroialSignosVitalesPaciente(id) {

    let url =  `${this.url}/ver/signos/paciente/${id}`;
    return this._http.get( url );

  }

  agregarSignosVitales(id, body){

    let url =  `${this.url}/agregar/signos/consulta/${id}`;
    return this._http.put( url, body );

  }

  obtenerConsultaPorElId(id){

    let url = `${this.url}/conslta/general/identificacion/${id}`;

    return this._http.get( url );

  }

  agregarEsquemaVacunacion( esquema ){
    let url =  `${this.url}/agregar/esquema/vacunacion`;

    return this._http.post(   url, esquema  );

  }

}
