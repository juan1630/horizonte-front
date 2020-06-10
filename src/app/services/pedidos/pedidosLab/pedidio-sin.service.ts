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
  
  cambiarEstado( id, estadoPedido, fechaProceso ){
   

    // esta funcion nos ayuda a evaluar el estado del pedido 
    // y actualizarlo dependiendo del caso

    let fecha = {
      fechaProceso
    }

    let estado = estadoPedido.estado;
   
    let url: string;

    if( estado === 'proceso' ){

      url = `${URLDEV}/pedidos/sin/mem/${id}`;
    
    }else if( estado === 'terminado' ){
    
      url = `${URLDEV}/pedidos/sin/mem/terminado/${id}`;

    }

   return this._http.put( url, fecha );
  }



  // obtenemos todos los pedidos con el estado de pendiente

  obtenerPedidosPendientes(){
    let url = `${URLDEV}/pedidos/sin/mem`;

    return this._http.get(url);
    
  }

  //=============================================
  //      Obtener un pedido por el ID
  //=============================================

  obtenerPedidoPorId(id){

    let url = `${URLDEV}/pedidos/sin/mem/${id}`;

    return this._http.get(url);
 
  }

}
