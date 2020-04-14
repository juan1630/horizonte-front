import { Injectable } from '@angular/core';
import { URLCountries } from '../../config/index.config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( public _http: HttpClient ) { }

  getCountries(){
    return this._http.get( URLCountries )
    .pipe( map( (countries) => {
        return countries;
    } ) )
  } 
}
