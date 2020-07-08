import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mesages = [];

  public payload={
    message: ''
  };

  constructor(
    private wsloginService: WsLoginService
  ) { }

  ngOnInit(): void {

    this.wsloginService.escucharMensajesLab()
    .subscribe( (message) => {

      this.mesages.push( message.payload );
  
    } )

  }

  enviarData(){

    this.wsloginService.enviarMensaje( this.payload );
    this.payload.message = '';

  }

}
