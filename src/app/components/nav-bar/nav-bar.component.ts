import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { getDataStorage} from '../../functions/storage/storage.funcion';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() nombreUsuario: string;

  public usuario = {
    role: ""
  };

  constructor(
    public _loginService: LoginService,
    private wsLoginService: WsLoginService,
    public router: Router
  ) { }



  ngOnInit(): void {
    this.usuario = getDataStorage();

  }

  cerrarSesion(){


    this._loginService.logout();
    this.wsLoginService.desconectarUsuario(  this.usuario.role )


  }

}
