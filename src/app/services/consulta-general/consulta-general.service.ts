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

    this.url = "https://sleepy-tor-20835.herokuapp.com/nueva/visita";

  }

  agregarVisita(visita){
    // this.url += '/nueva/visita';
    return this._http.post(this.url, visita );
  }
}
