import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from '../../config/index.config';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor( 
    public _http: HttpClient
  ) { }


  setPaquete( data:any, paciente: any, paquete: any, fecha: string, anticipo:number, folio: number, vendedor: string, atendio:string ) {



    // esta funcion inserta en la tabla relacional los datos necesarios

    let dataPaquete = {

      folio,
      vendedor,
      paciente: paciente._id,
      paquete:paquete._id,
      atendio,
      anticipo
    
    }

    let uri = `${URLDEV}/nuevo/paquete/usuario`;

   return this._http.post( uri , dataPaquete )
    .pipe( map( (data) => data ) );

  }

  addMembresia(  body:any ){


    let uri = `${URLDEV}/agregar/membresia`;

    return this._http.post( uri, body);

  }

}
