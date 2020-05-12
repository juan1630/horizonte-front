import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from 'src/app/config/index.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioPreciosService {

  constructor(
    private _http: HttpClient
  ) { }


  getExamenes(){

    let url = URLDEV+'/laboratorio/estudios';
    return this._http.get(url);
  }


  deleteExamenById( id: string ){
    let url = `${URLDEV}/estudios/laboratorio/${id}`;

    return this._http.delete(url);
  }

}
