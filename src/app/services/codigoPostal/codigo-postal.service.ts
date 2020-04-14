import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URLCODIGOPOSTAL } from 'src/app/config/index.config';

@Injectable({
  providedIn: 'root'
})
export class CodigoPostalService {

  constructor( public http: HttpClient ) {   }


  getLocalidades( codigo: number ){
  // obtenemos las localidades por el Codigo postal
   let tipo = '?type=simplified';

  let url =  `${URLCODIGOPOSTAL}${codigo}${tipo}` ;
  console.log( url );

  return this.http.get( url )
  .pipe( map( res => { return res; }  ) )

  }
}
