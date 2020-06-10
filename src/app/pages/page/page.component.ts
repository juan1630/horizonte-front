import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { LaboratorioService } from 'src/app/services/sockets/laboratorio/laboratorio.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  
  public usuario;
  
  constructor(
    public wsLogin:WsLoginService,
    private WSLaboratorio: LaboratorioService
  ) { }


  ngOnInit() {
    this.getRole()
    this.wsLogin.mostarUsuario();
  }

  getRole(){
    this.usuario =  JSON.parse (localStorage.getItem('usuario'));
   
    this.wsLogin.login( this.usuario );
    this.verPedido();
  }

  verPedido(){
    this.WSLaboratorio.verPedido();
  }

}
