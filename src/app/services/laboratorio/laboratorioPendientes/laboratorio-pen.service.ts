import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioPenService {

  constructor(
   public socket: Socket
  ) { }

    mostrarPedido(){
        this.socket.on('nuevoPedido', (data) => {
          console.log(data);

        })
    }

}
