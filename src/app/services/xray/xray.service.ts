import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class XrayService {
    
    public url: string;


    constructor (
        public _http: HttpClient
    ){
        this.url = "https://sleepy-tor-20835.herokuapp.com"
    }

    getEstudioXray(): Observable<any>{
        return this._http.get(this.url + '/rayosX')
    }
    // Método de crear
    create(xray): Observable<any> {
        let params = JSON.stringify(xray);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'/rayosX', params, {headers: headers});
    }

    //Método Update
    update(id, xray): Observable<any> {
        let params = JSON.stringify(xray);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'/rayosX/'+id, params, {headers: headers});

    }

    //Método Delete
    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'/rayosX/'+id, {headers: headers});
    }

    //Método para obtener sólo un Servicio
    getXrayById(id): Observable<any> {
        return this._http.get(this.url+'/rayosX/'+id);
    }
}