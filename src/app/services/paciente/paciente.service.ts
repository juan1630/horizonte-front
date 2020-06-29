import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {  URLDEV } from '../../config/index.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  // public url = "https://horizonte-1.herokuapp.com";
  public url = "http://localhost:3200";

  constructor(
    private _http: HttpClient
  ) {

   }


  getPacientes( intervalo: number  ) {

    console.log("Intervalo", intervalo );

    let uri = this.url+'/paciente/'+ intervalo;
    return this._http.get( uri )
    .pipe(  map( (data) => {
      console.log( data )
      return data;
    } ) )
  }


  // este servicio crea un nuevo paciente en la DB
  setPacientes( data: any ){

    let uri = this.url + `/paciente`;

    return this._http.post( uri, data  )
    .pipe( map( (resp) =>   resp  ) )

  }


  // este servicio obtiene pacientes por nombre

  getPacientePorNombre( nombre: String ){


    // let uri = URLDEV + '/paciente/'+nombre;
    let uri = `${this.url}/pacientes/nombre/${nombre}`;

    return this._http.get(uri)
    .pipe(  map( (data) => {
        return data;
    }))

  }



  // este servicio agrega un paquete al usuario
  addPaquete( paciente:any,  paqueteSelect: any, f: any, paquetesPaciente ){
// recibe por parametro el ID del usuario, el paquete y los nuevos valores a actualizar

  let id = paciente._id;

  // let uri = URLDEV+'/agregarPaquete/'+id;
  let uri =  `${this.url}/agregarPaquete/${id}`;


// se obteiene la data para actulizar en el paquete
  let paqueteJson = {

    paquetes: paqueteSelect._id,
    paquetesVisitas: paquetesPaciente._id,
    generoPaciente: f.genero,
    municipio: f.municipio,
    parentescoContactoEmergancia1: f.paretesco1,
    contactoEmergancia2: f.contactoEmergancia2,
    parentescoContactoEmergancia2: f.paretesco2,
    telefonoContactoEmergencia2: f.telefonoEmergencia2,
    calleYnumeroFiscal: f.calleYnumeroFiscal,
    telefonoFiscal: f.telefonoFiscal

   }

  //  console.log( paqueteJson );

   return this._http.put( uri, paqueteJson )
    .pipe( map( (data) =>  data ));

  }
  // fin de la funcion



  getPacienteBtID(id: string) {

    let uri = `${ this.url }/pacientes/${id}`;

   return this._http.get( uri )
    .pipe( map( (paciente) =>  paciente  ) );
  }
}
