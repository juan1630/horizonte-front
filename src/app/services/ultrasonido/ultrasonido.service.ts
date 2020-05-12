import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class UltraSonidoService {
    
    public url: string;


    constructor (
        public _http: HttpClient
    ){
        this.url = "https://horizonte-1.herokuapp.com"
    }

    //////////////////////////////////////////////////
    //Obtener los estudios de ultrasonido del backend 
    //////////////////////////////////////////////////
    getEstudiosUltrasonido(): Observable<any>{
        return this._http.get(this.url + '/ultrasonido')
    }

    //////////////////////////////////////////////////
    //Método Crear Nuevo Estudio de Ultrasonido
    //////////////////////////////////////////////////
    create(ultrasonido): Observable<any>{
        let params =  JSON.stringify(ultrasonido);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'/ultrasonido', params, {headers: headers});
    }

    //////////////////////////////////////////////////
    //Método para Actualizar
    //////////////////////////////////////////////////
    update(id, ultrasonido): Observable<any>{
        let params = JSON.stringify(ultrasonido);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'ultrasonido'+id, params, {headers: headers})
    }

}