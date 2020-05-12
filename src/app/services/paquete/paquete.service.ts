import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { URLDEV } from 'src/app/config/index.config';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor( private _http: HttpClient ) { }

  // este servicio lista todos los paquetes sin nigun termino de busqueda
  getPaquetes(){

    let uri = URLDEV + '/paquetes';

    return  this._http.get(uri)
      .pipe( map( (data:any) => {
        return  data.paquetes;
      } ) )
  }

  getPaquetesSolicitud(){
    let uri = URLDEV + '/paquetes';

    return  this._http.get(uri)
     .pipe( map( (data:any) => data  
     ) )
  }


  getPaqueById( id: string ){

    let uri = `${URLDEV}/paquete/${id}`;
      return this._http.get( uri  )
      .pipe(   map( (data:any) => data.paquete  ));
  }

  getPacientePaquete( id: string ){
    let uri = `${URLDEV}/paquete/usuario/${id}`;

    return this._http.get( uri )
    .pipe( map( (data) =>  data ));
  }


}
