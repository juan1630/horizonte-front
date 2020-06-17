import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { URLDEV } from 'src/app/config/index.config';

@Injectable({
  providedIn: 'root'
})
export class EnvioEmailService {

  constructor(
    public _http: HttpClient
  ) { }


  envioEmail( cotizacion ){

    let url = `${URLDEV}/cotizacion`;

    return this._http.post(url, cotizacion);
  }

}
