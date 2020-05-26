import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { URLDEV } from 'src/app/config/index.config';

@Injectable({
  providedIn: 'root'
})
export class PedidioSinService {

  constructor(
    private _http:HttpClient
  ) { }


  enviarPedido(dataUser, dataPedido){

    let data = {
      dataUser,
      dataPedido
    }
    
  
    let url = `${URLDEV}/pedidos/sin/mem`;

     return this._http.post( url, data  );

  }


  cambiarEstadoEnProceso( id ){
    console.log(id);

    let url = `${URLDEV}/pedidios/sin/mem/${id}`;

   return this._http.get( url );
  }


}
