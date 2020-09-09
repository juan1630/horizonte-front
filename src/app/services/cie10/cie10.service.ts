import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URLDEV } from 'src/app/config/index.config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Cie10Service {

  public url = "https://sleepy-tor-20835.herokuapp.com";

  constructor(

    private _http: HttpClient

  ) { }

  getCiePorNombre ( diagnostico: String) {
    let uri = `${this.url}/cie10/${diagnostico}`;

    return this._http.get( uri )
    .pipe( map( (data) => {
      return data;
    }));
  }


}
