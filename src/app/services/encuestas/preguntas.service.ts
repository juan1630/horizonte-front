import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  
  constructor( private _http : HttpClient) {

   } //contructor

  agregarIndicadores( id : string, body ){
     return this._http.put( id, body)
     
   }
   verPacienteID (idp :string){

    return this._http.get("https://sleepy-tor-20835.herokuapp.com/paciente/"+ idp)
   }
}
