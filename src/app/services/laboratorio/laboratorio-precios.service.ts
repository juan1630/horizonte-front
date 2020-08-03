import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from 'src/app/config/index.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioPreciosService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = "https://sleepy-tor-20835.herokuapp.com";
   }


  getExamenes(){

    let url = this.url+'/laboratorio/estudios';
    return this._http.get(url);
  }


  deleteExamenById( id: string ){
    let url = `${URLDEV}/estudios/laboratorio/${id}`;

    return this._http.delete(url);
  }

}
