import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WsLoginService {

  public status:boolean = false;

  constructor( 
      private socket: Socket      
   )  { 
     this.checkStatus();
   }

  checkStatus(){
    this.socket.on('connect', ()=> {
      console.log('Conectado al servidor');
      this.status = true;

    });


    this.socket.on('disconnect', ()=> {
      console.log("Desconectado del servidor");
      this.status = false;
    });
  }


  login( usuario ){
    console.log(usuario );

    this.socket.emit('usuarioConectado', {nombre: usuario.nombre, role: usuario.role }, (resp)=> {
      console.log(resp)
    } )
  }

  mostarUsuario(){
    this.socket.on('usuarioEnLinea', (data) => {
        console.log(data)
    })
  }

}
