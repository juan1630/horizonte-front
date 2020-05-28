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


  // Enviamos el pedidos creado
  enviarPedido(dataUser, dataPedido){

    let data = {
      dataUser,
      dataPedido
    }
    
  
    let url = `${URLDEV}/pedidos/sin/mem`;

     return this._http.post( url, data  );

  }


  // buscamos el pedido por el id de forma individual
  
  cambiarEstadoEnProceso( id ){
    console.log(id);

    let url = `${URLDEV}/pedidios/sin/mem/${id}`;

   return this._http.get( url );
  }



  // obtenemos todos los pedidos con el estado de pendiente

  obtenerPedidosPendientes(){
    let url = `${URLDEV}/pedidos/sin/mem`;

    return this._http.get(url);
    
  }


}
