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
}