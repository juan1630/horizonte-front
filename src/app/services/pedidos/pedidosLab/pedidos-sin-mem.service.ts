import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable()
export class PedidoSinMembresiaService {
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = "https://horizonte-1.herokuapp.com"
    }
    
    getPedidoSinMembresia(): Observable <any> {
        return this._http.get(this.url + '/pedidos/sin/mem/proceso');
    }
}