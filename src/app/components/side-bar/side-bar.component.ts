import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {



  @Input() nombreUsuario:string;
  
  @Output() public notificarViaChat = new EventEmitter<any>();

  constructor(
    public router: Router,
    // public wsLoginService: WsLoginService
  ) { }

  ngOnInit(): void {
    

  }



  // esta funcio abre el chat y se elije el departamento


  // abrirChat(user){


  //   console.log(  user );

  //   this.notificarViaChat.emit({ user });

  // }


}
