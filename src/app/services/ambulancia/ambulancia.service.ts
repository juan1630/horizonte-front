import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AmbulanciaService {

    public url: string;
    // public ambulancia: [];

    constructor(
        public _http: HttpClient
    ){
        this.url = "https://horizonte-1.herokuapp.com";
    }
    

    getDestino(): Observable<any>{
        return this._http.get(this.url + '/ambulancia')
    }

    create(ambulancia): Observable<any> {
        let params = JSON.stringify(ambulancia);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'/ambulancia', params, {headers: headers});

    }

    update(id, ambulancia): Observable<any> {
        let params = JSON.stringify(ambulancia);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'/ambulancia/'+id, params, {headers: headers})
    }

    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.delete(this.url+'/ambulancia/'+id, {headers: headers});
    }

    getByIdAmbulancia(id): Observable<any> {
        return this._http.get(this.url+'/ambulancia/'+id);
    }

    getAmbulanciaById(ambulanciaId): Observable<any> {
        return this._http.get(this.url+'/ambulancia/'+ambulanciaId);
    }
}
