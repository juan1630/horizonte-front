import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  constructor(
    public socket: Socket
  ) { }

    enviarInformacion( pedido ){

      this.socket.emit('pedidoLaboratorio', {payload: pedido});
    }


}
