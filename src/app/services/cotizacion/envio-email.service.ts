import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvioEmailService {

  constructor(
    public _http: HttpClient
  ) { }


  envioEmail( cotizacion ){

    let url = `${URL}/cotizacion`;

    return this._http.get(url, cotizacion);
  }

}
