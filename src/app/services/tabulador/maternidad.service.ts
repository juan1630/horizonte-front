import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URLDEV } from 'src/app/config/index.config';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaternidadService {

  constructor( 
          public  _http:HttpClient
   ) { }


   getSemanas( semana ){
     
     console.log( semana );

    let url = `${URLDEV}/tabulador/maternidad/${semana}`;

    return this._http.get(url)
              .pipe( map(  (data:any) => {
                console.log( data );
                    return data.pagos;
              }

     ));
   
    }


    getTabulador(){
      let  url = `${URLDEV}/tabulador/maternidad`;
      return this._http.get(url)
      .pipe( map((data: any) => {
          return data;
      } 
      ))
    }


    verPagos( id: string ){
      
        let url = `${URLDEV}/paciente/paquete/pagos/${id}`;
      
        return this._http.get( url )
      .pipe( map( (data:any) => data ) )
      
    }

    addPago( pago, id: string ){

        let url = `${URLDEV}/paciente/paquete/pagos/${id}`;

        return this._http.post(url, pago)
        .pipe(map( (data:any) => {
            console.log(data);
            return data;
        } ))

    }

}
