import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {

  public url = 'http://localhost:3200/agregar/maquina'

  constructor( private _http: HttpClient  ) { }



  agregarMaquina(  tipoIsumo, info  ){


    if(  tipoIsumo === 'maquina' ){ 



      return this._http.post( this.url, info )
   
    }else if(  tipoIsumo === 'medicamentos'  ) {
      console.log( 'medicamentos' );
    }



  }


}
