import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { URLDEV } from 'src/app/config/index.config';
import * as moment from 'moment';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor( private _http: HttpClient ) { }

  // este servicio lista todos los paquetes sin nigun termino de busqueda
  getPaquetes(){

    let uri = "https://sleepy-tor-20835.herokuapp.com" + '/paquetes';

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

    let uri = `http://localhost:3200/paquete/usuario/${id}`;

    return this._http.get( uri )
    .pipe( map( (data) =>  data ));
  }



  // subir documentacion de los paquetes
 subirDocsPaquetes(   files: File, idPaciente : string ){
    // console.log(files);

    // console.log(idPaciente);

    let formData = new FormData();



    formData.append('contrato', files  );
    formData.append('file' ,  files);
    formData.append('idPaciente', idPaciente);
    console.log( formData );

  let url = `http://localhost:3200/subir/contratos`;

  return this._http.put( url, formData );
 }


}
