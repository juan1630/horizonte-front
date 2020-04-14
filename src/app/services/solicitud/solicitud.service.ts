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


  setPaquete( data:any, paciente: any, paquete: any, fecha: string ) {

    let dataPaquete = {
      folio: data.folio,
      vendedor: data.vendedor,
      paciente: paciente._id,
      paquete:paquete._id,
      atendio: data.atendio,
      anticipo: parseFloat( data.anticipo)
    }

    console.log( dataPaquete );

    let uri = `${URLDEV}/nuevo/paquete/usuario`;

   return this._http.post( uri , dataPaquete )
    .pipe( map( (data) => data ) );


  }

}
