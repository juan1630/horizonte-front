import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  
  public usuario;
  
  constructor(
    public wsLogin:WsLoginService
  ) { }

  ngOnInit() {
    this.getRole()
    this.wsLogin.mostarUsuario();
  }

  getRole(){
    this.usuario =  JSON.parse (localStorage.getItem('usuario'));
   
    this.wsLogin.login( this.usuario );
  }

}
