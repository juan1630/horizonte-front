import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from 'src/app/config/index.config';

@Injectable({
  providedIn: 'root'
})
export class ResonanciaService {

  constructor(
    private _http: HttpClient
  ) { }


  agregarResonancia(  info  ){

    console.log( info );
    
     let url =  `${URLDEV}/nueva/resonancia`;
    
     return this._http.post(  url, info );


  }

eliminarResonancia(id){


  let url = `${URLDEV}/resonancia/${id}`;

  return this._http.delete( url );
}


  verResonancias(){
    let url = `${URLDEV}/resonancia`;

    return this._http.get(url);

  }


}
