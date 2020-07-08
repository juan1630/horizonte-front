import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public usuarioConectados = [];


  @Input() nombreUsuario:string;
  @Output() abrirChatPadre = new EventEmitter<any>();

  constructor(
    public router: Router,
    public wsLoginService: WsLoginService
  ) { }

  ngOnInit(): void {


    this.wsLoginService.escucahrUsuaurtioConectados()
    .subscribe( (arg:any) => { 
      this.usuarioConectados.push( arg.data );

    });

    // escucahmos el mensaje de los usuarios



    // escuchamos si algun usuario se desconecta

    this.wsLoginService.escucharUsuarioDesconectado()
      .subscribe(arg =>  {  


        this.usuarioConectados.forEach(  (user:any, index) => {
        
          if(  user.usuario._id === arg.user._id  ){


            this.usuarioConectados.splice(index, 1);
          }



        })

       });
    
    

  }



  // esta funcio abre el chat y se elije el departamento


  abrirChat(user){

    this.abrirChatPadre.emit(user);

  }


}
