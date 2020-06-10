import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLDEV } from 'src/app/config/index.config';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  constructor(
    private _http: HttpClient
  ) { 

  }


  verPerfiles(){
    
    let url = `${URLDEV}/perfiles`;

    return this._http.get(url);

  }


  crearUnNuevoPerfil( perfil ){


    let url =  `${URLDEV}/perfiles`;


    return this._http.post(url, perfil );
  }



}
