import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
//import { info } from 'console';


@Injectable({
  providedIn: 'root'
})
export class AgregarService {


  constructor( private _http: HttpClient) {

   }



agragarmedicamentos (info){

  let url = "https://sleepy-tor-20835.herokuapp.com" + "/agregar/medicamento";

  return this._http.post(url, info)
  
 }

 obtenermedicamento () {

  let url = "https://sleepy-tor-20835.herokuapp.com" + "/medicamentos/doctor";

  return this._http.get(url)

 }

}
