import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {
  public url: string;

  constructor(

    public _http: HttpClient

  ) { 

    this.url = "https://sleepy-tor-20835.herokuapp.com"

  }

  agregarHistoriaClinica(historia):Observable<any>{

    // let params = JSON.stringify(historia);
    // let headers = new HttpHeaders().set('Content-type', 'application/json');


    return this._http.post(this.url+'/agregar/AgregarAntecedentes', historia);
  }




  agregarIdModelPaciente(id, idAntecedentes):Observable<any>{
    
    let uri =  'http://localhost:3200' +'/agregar/antecedentes/' + id;
    
    console.log('Id antecedentes', idAntecedentes);
    
    console.log('Id paciente', id);
    
    return this._http.put(uri, idAntecedentes)
  }
}
