import { Injectable } from '@angular/core';
import { URLDEV } from 'src/app/config/index.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TomografiaService {

  constructor(
    private _http:HttpClient
  ) { }


  obtenerTomografias(){

    let url = `${URLDEV}/tomografia`;


    return this._http.get( url );
    
  }

  
  agregarTomografias(info){

    let url = `${URLDEV}/tomografia`;

    return this._http.post( url, info  );

}

  
deleteTomografia( id ){

  let url = `${URLDEV}/tomografia/${id}`;


  return this._http.delete(  url  );
  

  }


  actualizarTomografia(id, body){
    let url = `${URLDEV}/tomografia/${id}`;

    return this._http.put(  url, body );
  }


  obtenerTomografiaPorId(id){

    let url = `${URLDEV}/tomografia/${id}`;


    return this._http.get(url);
  
  }


}
