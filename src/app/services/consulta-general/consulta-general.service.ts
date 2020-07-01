import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaGeneralService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) { 

    this.url = "https://horizonte-1.herokuapp.com"

  }

  agregarVisita(visita){
    this.url += '/nueva/visita';
    return this._http.post(this.url, visita );
  }
}
