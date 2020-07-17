import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { getDataStorage } from '../../../functions/storage/storage.funcion';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mesages = [];
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
    message: ''
  };

  constructor(
    private wsloginService: WsLoginService
  ) { }

  ngOnInit(): void {


    this.usuario = getDataStorage();


    // if( this.usuario.role === "laboratorio" || this.usuario.role === "recepcion" ){
      

      this.wsloginService.escucharMensajesLab()
      .subscribe( (message) => {
        this.mesages.push( message.payload );
      });



    // }



  }

  enviarData(){


    
    // if( this.usuario.role === "laboratorio" || this.usuario.role === "recepcion" ){
      this.wsloginService.enviarMensaje( this.payload );
      this.payload.message = '';
      
    // }


  }

}
