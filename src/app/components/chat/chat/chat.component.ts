import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as moment from 'moment';

import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { getDataStorage } from '../../../functions/storage/storage.funcion';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Output() public cerrarChat = new EventEmitter<any>();
  @Input() public roleNotificacion   : string ;
 
  public mesages = [];
  public horaEnvio = moment().format('h:mm:ss');
  public usuario = {
    RFC: "",
    curp: "",
    fechaREgistro: "",
    img: "",
    nombre: "",
    password:"" ,
    role: "",
    turno:"" ,
    __v: 0,
    _id: ""
  }

  public payload={
    message: '',
    horaEnvio: this.horaEnvio
  };
  

  constructor(
    private wsloginService: WsLoginService
  ) { }

  ngOnInit(): void {

    this.usuario = getDataStorage();


      this.wsloginService.escucharMensajesLab()
      .subscribe( (message) => {
        this.mesages.push( message.payload );
      
      });



  }

  

  enviarData(){

      this.wsloginService.enviarMensaje( this.payload );
      this.payload.message = '';
      
  }


  cerrarVentanachat(){


      this.cerrarChat.emit({ estado: true  });

  }

}
