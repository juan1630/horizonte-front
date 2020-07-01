import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public payload={
    message: ''
  };

  constructor(
    private loginService: WsLoginService
  ) { }

  ngOnInit(): void {
  }



  enviarData(){

    this.loginService.enviarMensaje( this.payload );

  }

}
