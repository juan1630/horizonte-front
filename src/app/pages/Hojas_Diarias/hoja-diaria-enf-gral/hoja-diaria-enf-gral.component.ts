import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';


@Component({
  selector: 'app-hoja-diaria-enf-gral',
  templateUrl: './hoja-diaria-enf-gral.component.html',
  styleUrls: ['./hoja-diaria-enf-gral.component.css']
})
export class HojaDiariaEnfGralComponent implements OnInit {

  constructor( 
    private loginService: WsLoginService
  ) { }

  ngOnInit(): void {
  
    this.loginService.escucharConsulta();
    

    
  }

}
