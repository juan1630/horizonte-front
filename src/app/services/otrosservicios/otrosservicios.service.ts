import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class OtrosServicios {
    
    public url: string;

    constructor (
        public _http: HttpClient
    ){
        this.url = "https://horizonte-1.herokuapp.com/otros"
    }

    getOtrosServicios(): Observable<any>{
        return this._http.get(this.url + '/servicios')
    }

    //Método Crear
    create(otros): Observable<any> {
        let params = JSON.stringify(otros);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'/servicios', params, {headers: headers});

    }

     //Método Update
     update(id, otros): Observable<any> {
        let params = JSON.stringify(otros);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'/servicios/'+id, params, {headers: headers});

    }

    //Método para obtener sólo un Servicio
    getServicioById(id): Observable<any> {
        return this._http.get(this.url+'/servicios/'+id);
    }


    //Método Eliminar
    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'/servicios/'+id, {headers: headers});
    }

}