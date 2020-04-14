import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() nombreUsuario: string;

  constructor(  
    public _loginService: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  cerrarSesion(){
    this._loginService.logout();
  }

}
