import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLMedicos } from '../../config/index.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaquetesMaternidadService {

  // visitas:any[] = [
  //   { tipo: '1', consulta: 'Consulta', fecha: new Date(), medico: 'alguien', firma: 'nelson' },
  //   { tipo: '2', consulta: 'Consulta', fecha: new Date(), medico: 'alguien', firma: 'nelson' },
  //   { tipo: '3', consulta: 'USG Obstetrico', fecha: new Date(), medico: 'alguien', firma: 'nelson' },
  //   { tipo: '4', consulta: 'V.I.H', fecha: new Date(), medico: 'alguien', firma: 'nelson' },
  //   { tipo: '4', consulta: 'Examen de orina', fecha: new Date(), medico: 'alguien', firma: 'nelson' }
  // ]

  constructor(private _http: HttpClient) { }

  getMedicos(){
    let URL = URLMedicos
    return this._http.get( URL )
    .pipe( map( ( data:any ) => {
      return data
    }))
  }

  addVisitas( body:any, id:string ){
    let URL = 'https://sleepy-tor-20835.herokuapp.com/paciente/paquete/visitas/'+id;
   
    return this._http.post( URL, body )
    .pipe( map( ( data:any ) => {
      console.log( data );
      return data;
      
    }))
  }

  getVisitas( id: string ){
    let URL = 'https://sleepy-tor-20835.herokuapp.com/paciente/paquete/visitas/'+id;
    
    return this._http.get( URL )
    .pipe( map( ( data:any )=> {
      console.log( data )
      return data
    }))
  }

}
