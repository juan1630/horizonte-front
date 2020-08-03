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

  agregarHistoriaClinica(id, historia):Observable<any>{

    let params = JSON.stringify(historia);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.put(this.url+'/historia-clinica/'+id, params, {headers: headers});
  }
}
