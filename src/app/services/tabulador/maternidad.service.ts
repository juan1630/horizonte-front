import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URLDEV } from 'src/app/config/index.config';
import { map } from 'rxjs/operators';

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

}
