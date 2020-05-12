import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class EndoscopiaService {
    
    public url: string;


    constructor (
        public _http: HttpClient
    ){
        this.url = "https://horizonte-1.herokuapp.com"
    }

    //////////////////////////////////////////////////
    //Obtener los estudios de ultrasonido del backend 
    //////////////////////////////////////////////////
    getEstudiosEndoscopia(): Observable<any>{
        return this._http.get(this.url + '/endoscopia')
    }

    //////////////////////////////////////////////////
    //Método Crear Nuevo Estudio de Ultrasonido
    //////////////////////////////////////////////////
    create(endoscopia): Observable<any>{
        let params =  JSON.stringify(endoscopia);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'/endoscopia', params, {headers: headers});
    }

    //////////////////////////////////////////////////
    //Método para Actualizar
    //////////////////////////////////////////////////
    update(id, endoscopia): Observable<any>{
        let params = JSON.stringify(endoscopia);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'/endoscopia/'+id, params, {headers: headers})
    }

}