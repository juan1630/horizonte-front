import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { URLDEV } from '../../config/index.config'

@Injectable({
  providedIn: 'root'
})
export class JefaturaEnfermeriaService {

  constructor(
   public  _http: HttpClient
  ) {

   }


   verIndicadores(){

    let url = `${URLDEV}/ver/consultas/identificacion`;
     
   return  this._http.get(  url );
   
  }



}
