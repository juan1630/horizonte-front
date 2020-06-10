import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from 'src/app/config/index.config';
import {  map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PatologiaService {

  constructor(
    private _http: HttpClient
  ) { }

  

  getPatologias(){
    let url = `${URLDEV}/patologia`;


    return this._http.get( url )
    .pipe( map(  (data:any) => {
      return data.data;
    }  ) )

  }


  deletePatologia(id){
    
    let url = `${URLDEV}/patologia/${id}`;
    return this._http.delete( url );
  }


  getOne( id: string ){

    let url = `${URLDEV}/patologia/${id}`;

    return this._http.get( url );
  
  }


  updateOne( id, body  ) {
    let url = `${URLDEV}/patologia/${id}`;



    return this._http.put( url, body  );
  }

  setANewPatologia( body ){
    let url = `${URLDEV}/patologia`;

    return this._http.post( url, body );
  }

  
}
